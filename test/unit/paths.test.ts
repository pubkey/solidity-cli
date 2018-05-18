/// <reference path="../../node_modules/@types/mocha/index.d.ts" />

import * as assert from 'assert';
import AsyncTestUtil from 'async-test-util';

import paths from '../../src/paths';

describe('paths.test.js', () => {
    it('solc-installs', () => {
        assert.ok(paths.solidityInstalls);
        assert.ok(paths.solidityInstalls.includes('solcjs-cli/solc-installs'));
    });
    it('compile-cache', () => {
        assert.ok(paths.compileCache);
        assert.ok(paths.compileCache.endsWith('solcjs-cli/compile-cache'));
    });
});
