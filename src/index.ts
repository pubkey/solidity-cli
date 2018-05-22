import * as path from 'path';
import * as fs from 'fs';

import {
    Options
} from './options';

import {
    SolcCompiledFile,
    Artifact
} from './compiled.d';

import {
    hashCode
} from './read-code';
import {
    SourceCode,
    getSolcVersion
} from './read-code';

import * as caching from './caching';

import compileCode from './compile';

import {
    createJavascriptFile,
    createTypescriptFile
} from './output-files';

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
        const compiled = await compileCode(source);
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
export async function compile(code: string): Promise<SolcCompiledFile> {
    const pseudoSource: SourceCode = {
        filename: 'programatically',
        code: code,
        codeHash: hashCode(code),
        solcVersion: getSolcVersion(code)
    };
    const artifact = await generateOutput(pseudoSource);
    return artifact.compiled;
}
