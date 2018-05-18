/**
 * ensures the required solc-versions are installed
 */
import * as util from 'util';
import * as path from 'path';
import * as fs from 'fs';
import * as directoryExists from 'directory-exists';
import * as npmi from 'npmi';
import * as rimraf from 'rimraf';

import paths from './paths';

const npmInstall = util.promisify(npmi);
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
        await npmInstall({
            name: 'solc',
            version,
            path: installPath,
            forceInstall: false,
            npmLoad: {				// npm.load(options, callback): this is the "options" given to npm.load()
                loglevel: 'silent'	// [default: {loglevel: 'silent'}]
            }
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
