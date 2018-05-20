/**
 * node-script that takes solidity-code as base64 and outputs a json with the compile-output
 * we use this to make multi-threading easiser
 */
import {
    getSolcVersion
} from './read-code';
import paths from './paths';

// const codeBase64 = 'cHJhZ21hIHNvbGlkaXR5IDAuNC4yNDsNCg0KDQpjb250cmFjdCBCYXNpYyB7DQogICAgYWRkcmVzcyBwdWJsaWMgb3duZXI7DQp9DQo=';
// const codeBase64 = 'cHJhZ21hIHNvbGlkaXR5IDAuNC4yNDsNCg0KDQpjb250cmFjdCBCYXNpYyB7DQogICAgYWRkcmVzczEgcHVibGljIG93bmVyOw0KfQ0K'; // broken
const codeBase64 = process.argv[2];
const code = Buffer.from(codeBase64, 'base64').toString();

const run = async function(code): Promise<{ success: boolean, result: any, error: any }> {
    const solcVersion = getSolcVersion(code);

    const solc = require(paths.solidityInstalls + '/' + solcVersion + '/node_modules/solc');
    const compiled = solc.compile(code, 1);

    if (!compiled.errors) {
        // success
        return {
            success: true,
            result: compiled.contracts,
            error: null
        };
    } else {
        return {
            success: false,
            result: null,
            error: compiled.errors
        };
    }
};

run(code).then(out => console.log(JSON.stringify(out, null, 2)));
