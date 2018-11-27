/**
 * saves output to the cache
 * and retrieves it again,
 * so equal code does not have to be compiled multiple times
 */
import * as util from 'util';
import * as fs from 'fs';
import * as path from 'path';
const directoryExists = require('directory-exists');

import paths from './paths';

const fileExists = util.promisify(fs.stat);
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

import {
    Artifact
} from './compiled.d';

async function ensureDirectoryExists(): Promise<void> {
    const exists = await directoryExists(paths.compileCache + '/');
    if (!exists) {
        fs.mkdirSync(path.join(paths.compileCache, '../'));
        fs.mkdirSync(paths.compileCache + '/');
    }
}

function fileBySource(hash: string): string {
    return path.join(
        paths.compileCache,
        hash + '.json'
    );
}

export async function has(hash: string): Promise<boolean> {
    try {
        await fileExists(fileBySource(hash));
        return true;
    } catch (err) {
        return false;
    }
}

export async function get(hash: string): Promise<Artifact> {
    const content = await readFile(fileBySource(hash), 'utf-8');
    const artifact = JSON.parse(content);
    return artifact;
}

export async function set(
    hash: string,
    artifact: Artifact
): Promise<void> {
    await ensureDirectoryExists();
    const fileContent = JSON.stringify(artifact);
    const filePath = fileBySource(hash);
    await writeFile(filePath, fileContent);
}
