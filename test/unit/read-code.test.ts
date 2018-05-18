/// <reference path="../../node_modules/@types/mocha/index.d.ts" />

import * as assert from 'assert';
import AsyncTestUtil from 'async-test-util';
import * as path from 'path';
import * as fs from 'fs';
import * as util from 'util';
const readFile = util.promisify(fs.readFile);

import readCodeFiles from '../../src/read-code';
import {
    getSourceCode,
    getSolcVersion
} from '../../src/read-code';

describe('read-code.test.js', () => {

    const contractsFolder = path.resolve(__dirname, '../../', '../test/contracts/');

    describe('.getSourceCode()', () => {
        it('should get the code', async () => {
            const code = await getSourceCode(contractsFolder + '/Basic.sol');
            assert.ok(code.includes('contract Basic'));
        });
        it('should resolve imports', async () => {
            const code = await getSourceCode(contractsFolder + '/Import.sol');
            assert.ok(code.includes('contract Import'));
            assert.ok(code.includes('contract Basic'));
        });
    });
    describe('.getSolcVersion()', () => {
        it('should get the version', async () => {
            const code = await readFile(contractsFolder + '/Basic.sol', 'utf-8');
            const version = getSolcVersion(code);
            assert.equal(version, '0.4.24');
        });
    });
    describe('.readCodeFiles()', () => {
        it('should get all files', async () => {
            const pathArg = contractsFolder + '/*.sol';
            console.log(pathArg);
            const codeAr = await readCodeFiles({
                sourceFolder: pathArg
            });
        });
    });
});
