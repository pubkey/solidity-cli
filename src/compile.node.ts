/**
 * node-script that takes solidity-code as base64 and outputs a json with the compile-output
 * we use this to make multi-threading easiser
 */

import * as util from 'util';
import * as fs from 'fs';
import * as shelljs from 'shelljs';
import * as path from 'path';

const writeFile = util.promisify(fs.writeFile);

import {
    getSolcVersion
} from './read-code';
import paths from './paths';

// const codeBase64 = 'cHJhZ21hIHNvbGlkaXR5IDAuNC4yNDsNCg0KDQpjb250cmFjdCBCYXNpYyB7DQogICAgYWRkcmVzcyBwdWJsaWMgb3duZXI7DQp9DQo=';
// const codeBase64 = 'cHJhZ21hIHNvbGlkaXR5IDAuNC4yNDsNCg0KDQpjb250cmFjdCBCYXNpYyB7DQogICAgYWRkcmVzczEgcHVibGljIG93bmVyOw0KfQ0K'; // broken
const codeBase64 = process.argv[2];
const location = process.argv[3] + '.json';
const code = Buffer.from(codeBase64, 'base64').toString();

const run = async function(code: string): Promise<void> {
    const solcVersion = getSolcVersion(code);

    const solc = require(paths.solidityInstalls + '/' + solcVersion + '/node_modules/solc');
    const compiled = solc.compile(code, 1);

    const out = {
        version: solcVersion,
        compiled
    };

    // create destination if not exists
    shelljs.mkdir('-p', paths.compileTmpFolder);

    await writeFile(
        path.join(paths.compileTmpFolder, location),
        JSON.stringify(out, null, 2)
    );
};

run(code);
