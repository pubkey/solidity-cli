/// <reference path="../../node_modules/@types/mocha/index.d.ts" />

import * as assert from 'assert';
import AsyncTestUtil from 'async-test-util';
import * as path from 'path';

import paths from '../../src/paths';

import compile from '../../src/compile';
import readCodeFiles from '../../src/read-code';

describe('compile.test.js', () => {
    const contractsFolder = path.resolve(__dirname, '../../', '../test/contracts/');
    it('should compile the code', async function() {
        this.timeout(1000 * 50);
        const files = await readCodeFiles({
            sourceFolder: contractsFolder + '/Basic.sol'
        });
        const compiled = await compile(files[0]);

        assert.equal(typeof compiled[':Basic'].interface, 'string');
    });
});
