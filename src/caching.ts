/**
 * saves output to the cache
 * and retrieves it again,
 * so equal code does not have to be compiled multiple times
 */
import * as util from 'util';
import * as fs from 'fs';
import * as path from 'path';
import * as directoryExists from 'directory-exists';

import paths from './paths';

import {
    SourceCode
} from './read-code';

const fileExists = util.promisify(fs.stat);
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

import {
    SolcCompiledFile
} from './compiled.d';

async function ensureDirectoryExists(): Promise<void> {
    const exists = await directoryExists(paths.compileCache + '/');
    if (!exists) {
        fs.mkdirSync(path.join(paths.compileCache, '../'));
        fs.mkdirSync(paths.compileCache + '/');
    }
}

function fileBySource(source: SourceCode): string {
    return path.join(
        paths.compileCache,
        source.codeHash + '.json'
    );
}

export async function has(source: SourceCode): Promise<boolean> {
    try {
        const exists = await fileExists(fileBySource(source));
        return true;
    } catch (err) {
        return false;
    }
}

export async function get(source: SourceCode): Promise<{
    compiled: SolcCompiledFile,
    javascript: string,
    typescript: string
}> {
    const content = await readFile(fileBySource(source), 'utf-8');
    const artifact = JSON.parse(content);
    return artifact;
}

export async function set(
    source: SourceCode,
    artefact: {
        compiled: SolcCompiledFile,
        javascript: string,
        typescript: string
    }
): Promise<void> {
    await ensureDirectoryExists();
    const fileContent = JSON.stringify(artefact);
    const filePath = fileBySource(source);
    await writeFile(filePath, fileContent);
}
