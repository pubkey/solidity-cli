/// <reference path="../../node_modules/@types/mocha/index.d.ts" />

import * as assert from 'assert';
// import AsyncTestUtil from 'async-test-util';

import paths from '../../src/paths';

import compile from '../../src/compile';
import readCodeFiles from '../../src/read-code';

describe('issues.test.js', () => {
    it('could not compile complex contract with warnings', async function() {
        this.timeout(60 * 1000);
        const files = await readCodeFiles({
            sourceFolder: paths.contractsFolder + '/DonationBag.sol'
        });
        const compiled = await compile(files[0]);
        assert.ok(compiled);
    });
});
