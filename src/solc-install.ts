/**
 * ensures the required solc-versions are installed
 * I tried to use 'npmi' but it always shows output in the console
 * So we use a custom shelljs
 */
import * as util from 'util';
import * as path from 'path';
import * as fs from 'fs';
import * as directoryExists from 'directory-exists';
import * as rimraf from 'rimraf';
import {
    exec
} from 'shelljs';

import paths from './paths';

const removeFolder = util.promisify(rimraf);

/**
 * install the given version into the ./solidity-version - folder
 * returns false if already exists
 */
export async function installVersion(version: string): Promise<boolean> {
    const installPath = paths.solidityInstalls + '/' + version;

    // check if already exists
    const exists = await directoryExists(installPath + '/');
    if (exists) return false;

    // not exists -> install it
    try {
        // console.log('# installing solc@' + version);
        await new Promise((res, rej) => {
            const shell = 'npm install solc@' + version + ' --prefix ' + installPath + ' --depth 0 --silent';
            exec(shell, function(code, stdout, stderr) {
                if (code === 0) res();
                else rej(new Error(stderr));
            });
        });
    } catch (err) {
        // remove folder
        await removeFolder(installPath);
        throw err;
    }

    return true;
}

export default async function solcInstall(versions: string[]) {
    await Promise.all(
        versions
            .filter((elem, pos, arr) => arr.indexOf(elem) === pos) // unique
            .map(async (version) => {
                await installVersion(version);
            })
    );
}
