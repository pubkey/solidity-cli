/// <reference path="../../node_modules/@types/mocha/index.d.ts" />

import * as assert from 'assert';
import AsyncTestUtil from 'async-test-util';
import * as path from 'path';

import paths from '../../src/paths';

import compile from '../../src/compile';
import readCodeFiles from '../../src/read-code';

import {
    basicCompiled
} from './cache';

import {
    createJavascriptFile,
    createTypescriptFile
} from '../../src/output-files';

import * as caching from '../../src/caching';

describe('caching.test.js', () => {
    describe('.set()', () => {
        it('should write to cache', async () => {
            const { source, compiled } = await basicCompiled();
            const javascript = await createJavascriptFile(source, compiled);
            const typescript = await createTypescriptFile(source, compiled);
            await caching.set(
                source, {
                    compiled,
                    javascript,
                    typescript
                }
            );
        });
    });
    describe('.has()', () => {
        it('should not have this in cache', async () => {
            const { source, compiled } = await basicCompiled();
            source.codeHash = 'foobar';
            const has = await caching.has(source);
            assert.equal(has, false);
        });
        it('should have cached the output', async () => {
            const { source, compiled } = await basicCompiled();
            const javascript = await createJavascriptFile(source, compiled);
            const typescript = await createTypescriptFile(source, compiled);
            await caching.set(
                source, {
                    compiled,
                    javascript,
                    typescript
                }
            );
            const has = await caching.has(source);
            assert.equal(has, true);
        });
    });
    describe('.get()', () => {
        it('should return the cached artifact', async () => {
            const { source, compiled } = await basicCompiled();
            const javascript = await createJavascriptFile(source, compiled);
            const typescript = await createTypescriptFile(source, compiled);
            await caching.set(
                source, {
                    compiled,
                    javascript,
                    typescript
                }
            );
            const artifact = await caching.get(source);
            assert.deepEqual(artifact, {
                compiled,
                javascript,
                typescript
            });
        });
    });
});
