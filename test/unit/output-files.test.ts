/// <reference path="../../node_modules/@types/mocha/index.d.ts" />

import * as assert from 'assert';

import {
    basicCompiled
} from './cache';

import {
    createJavascriptFile,
    createTypescriptFile,
    outputPath
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
    describe('.outputPath()', () => {
        it('single file only', async () => {
            const { source } = await basicCompiled();
            source.filename = '/home/foobar/workspace/myproject/contracts/MyContract.sol';
            const out = outputPath({
                sourceFolder: '/home/foobar/workspace/myproject/contracts/MyContract.sol',
                destinationFolder: '../compiled/',
            }, source);

            assert.equal(out, '/home/foobar/workspace/myproject/compiled/MyContract.sol');
        });
        it('no destinationFolder', async () => {
            const { source } = await basicCompiled();
            source.filename = '/home/foobar/workspace/myproject/contracts/MyContract.sol';
            const out = outputPath({
                sourceFolder: '/home/foobar/workspace/myproject/contracts/MyContract.sol'
            }, source);

            assert.equal(out, '/home/foobar/workspace/myproject/contracts/MyContract.sol');
        });
        it('directory', async () => {
            const { source } = await basicCompiled();
            source.filename = '/home/foobar/workspace/myproject/contracts/MyContract.sol';
            const out = outputPath({
                sourceFolder: '/home/foobar/workspace/myproject/contracts/*.sol',
                destinationFolder: '../compiled/'
            }, source);

            assert.equal(out, '/home/foobar/workspace/myproject/compiled/MyContract.sol');
        });
        it('nested directory', async () => {
            const { source } = await basicCompiled();
            source.filename = '/home/foobar/workspace/myproject/contracts/my/MyContract.sol';
            const out = outputPath({
                sourceFolder: '/home/foobar/workspace/myproject/contracts/**/.sol',
                destinationFolder: '../compiled/'
            }, source);

            assert.equal(out, '/home/foobar/workspace/myproject/compiled/my/MyContract.sol');
        });
        it('absolut destination', async () => {
            const { source } = await basicCompiled();
            source.filename = '/home/foobar/workspace/myproject/contracts/MyContract.sol';
            const out = outputPath({
                sourceFolder: '/home/foobar/workspace/myproject/contracts/**/.sol',
                destinationFolder: '/home/compiled/'
            }, source);

            assert.equal(out, '/home/compiled/MyContract.sol');
        });
    });
});
