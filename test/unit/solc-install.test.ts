/// <reference path="../../node_modules/@types/mocha/index.d.ts" />

import * as assert from 'assert';
import AsyncTestUtil from 'async-test-util';

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
        it('should not run the same version when called in parallel', async function() {
            this.timeout(1000 * 60);
            const results = await Promise.all([
                installVersion('0.4.21'),
                installVersion('0.4.21'),
                installVersion('0.4.21')
            ]);

            const trues = results.filter(v => !!v);
            const falses = results.filter(v => !v);
            assert.equal(trues.length, 1);
            assert.equal(falses.length, 2);
        });
    });
    describe('.solcInstall()', () => {
        it('should install all versions', async function() {
            this.timeout(1000 * 60);
            await solcInstall([
                '0.4.22',
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
