/// <reference path="../../node_modules/@types/mocha/index.d.ts" />

import * as assert from 'assert';
import AsyncTestUtil from 'async-test-util';

import paths from '../../src/paths';

import compile from '../../src/compile';
import readCodeFiles from '../../src/read-code';

describe('compile.test.js', () => {
    it('should compile the code', async function() {
        this.timeout(1000 * 50);
        const files = await readCodeFiles({
            sourceFolder: paths.contractsFolder + '/Basic.sol'
        });
        const compiled = await compile(files[0]);

        assert.equal(typeof compiled[':Basic'].interface, 'string');
    });
    it('should give a useable error', async function() {
        this.timeout(1000 * 50);
        const files = await readCodeFiles({
            sourceFolder: paths.contractsFolder + '/Broken.sol'
        });
        const error = await AsyncTestUtil.assertThrows(
            () => compile(files[0])
        );
        const str = error.toString();
        assert.ok(str.includes('Broken'));
        assert.ok(str.includes('whoever'));
    });
});
