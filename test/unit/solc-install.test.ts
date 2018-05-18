/// <reference path="../../node_modules/@types/mocha/index.d.ts" />

import * as assert from 'assert';
import AsyncTestUtil from 'async-test-util';
import * as path from 'path';
import * as fs from 'fs';
import * as util from 'util';
const readFile = util.promisify(fs.readFile);

import {
    installVersion,
} from '../../src/solc-install';
import solcInstall from '../../src/solc-install';

describe('solc-install.test.js', () => {
    describe('.installVersion()', () => {
        it('should install the version', async function() {
            this.timeout(1000 * 60);
            const res = await installVersion('0.4.24');
            assert.ok(res);
        });
        it('should already have the version', async function() {
            this.timeout(1000 * 60);
            const res = await installVersion('0.4.24');
            assert.equal(res, false);
        });
    });
    describe('.solcInstall()', () => {
        it('should install all versions', async () => {
            await solcInstall([
                '0.4.23',
                '0.4.23',
                '0.4.24'
            ]);
        });
        it('should throw for invalid version', async () => {
            await AsyncTestUtil.assertThrows(
                () => solcInstall([
                    '99.99.99'
                ])
            );
        });
    });
});
