import * as path from 'path';
import * as util from 'util';
import * as fs from 'fs';
import * as shelljs from 'shelljs';

const writeFile = util.promisify(fs.writeFile);

import {
    Options
} from './options';

import {
    SolcCompiledFile,
    Artifact
} from './compiled.d';

export {
    SolcCompiledContract,
    SolcCompiledFile
} from './compiled.d';

import {
    hashCode,
    readCodeFile
} from './read-code';
import readCodeFiles from './read-code';
import {
    SourceCode,
    getSolcVersion
} from './read-code';

import * as caching from './caching';

import compile from './compile';

import {
    createJavascriptFile,
    createTypescriptFile,
    outputPath
} from './output-files';

import {
    installVersion
} from './solc-install';

/**
 * generates the output
 * or retrieves it from cache
 */
export async function generateOutput(source: SourceCode): Promise<Artifact> {
    const isCached = await caching.has(source.codeHash);
    if (isCached) {
        const artifact = await caching.get(source.codeHash);
        return artifact;
    } else {
        await installVersion(source.solcVersion);
        const compiled = await compile(source);
        const artifact = {
            compiled: compiled,
            javascript: await createJavascriptFile(source, compiled),
            typescript: await createTypescriptFile(source, compiled)
        };

        await caching.set(source.codeHash, artifact);
        return artifact;
    }
}

/**
 * compiles the code
 * use this if you dont want to generate files,
 * but only get the compiled output
 */
export async function compileCode(code: string): Promise<SolcCompiledFile> {
    const pseudoSource: SourceCode = {
        filename: 'programatically',
        code: code,
        codeHash: hashCode(code),
        solcVersion: getSolcVersion(code)
    };
    const artifact = await generateOutput(pseudoSource);
    return artifact.compiled;
}

export async function compileFile(fileName: string): Promise<SolcCompiledFile> {
    const source = await readCodeFile(fileName);
    const artifact = await generateOutput(source);
    return artifact.compiled;
}

export async function runCli(options: Options) {
    const codeFiles = await readCodeFiles(options);
    const artifacts: {
        source: SourceCode,
        artifact: Artifact,
        destinationFolder: string,
        fileName: string
    }[] = await Promise.all(
        codeFiles.map(async (source) => {
            const artifact = await generateOutput(source);
            const outPath = outputPath(options, source);
            const fileNameFull = outPath.split('\/').pop() as string;
            return {
                source,
                artifact,
                destinationFolder: path.join(outPath, '../') as string,
                fileName: fileNameFull.split('.').shift() as string
            };
        })
    );

    // create destination if not exists
    if (options.destinationFolder) {
        shelljs.mkdir('-p', options.destinationFolder);
    }

    // write to files
    await Promise.all(
        artifacts.map(async (output) => {
            await writeFile(
                path.join(output.destinationFolder, output.fileName + '.js'),
                output.artifact.javascript
            );
            await writeFile(
                path.join(output.destinationFolder, output.fileName + '.ts'),
                output.artifact.typescript
            );
        })
    );
}
