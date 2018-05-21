/// <reference path="../../node_modules/@types/mocha/index.d.ts" />

import * as assert from 'assert';
import AsyncTestUtil from 'async-test-util';
import * as path from 'path';

import paths from '../../src/paths';
import {
    basicCompiled
} from './cache';

import compile from '../../src/compile';
import readCodeFiles from '../../src/read-code';
import {
    createJavascriptFile,
    createTypescriptFile
} from '../../src/output-files';

describe('output-files.test.js', () => {
    describe('.createJavascriptFile()', () => {
        it('should fill all placeholders', async function() {
            this.timeout(1000 * 50);
            const { source, compiled } = await basicCompiled();
            const output = await createJavascriptFile(source, compiled);

            assert.equal(output.includes('<!--'), false);
        });
        it('should be valid javascript', async function() {
            this.timeout(1000 * 50);
            const { source, compiled } = await basicCompiled();
            const output = await createJavascriptFile(source, compiled);
            const func = new Function('var module = {}; ' + output + ' return module;');
            const res = func();
            assert.ok(res.exports[':Basic'].assembly);
        });
    });
    describe('.createTypescriptFile()', () => {
        it('should fill all placeholders', async function() {
            this.timeout(1000 * 50);
            const { source, compiled } = await basicCompiled();
            const output = await createTypescriptFile(source, compiled);

            assert.equal(output.includes('<!--'), false);
        });
    });
});
