/// <reference path="../../node_modules/@types/mocha/index.d.ts" />

import * as assert from 'assert';
import AsyncTestUtil from 'async-test-util';
import * as path from 'path';

import readCodeFiles from '../../src/read-code';
import {
    getSourceCode
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
