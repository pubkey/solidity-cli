"use strict";
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var async_test_util_1 = require("async-test-util");
var solc_install_1 = require("../../src/solc-install");
var solc_install_2 = require("../../src/solc-install");
describe('solc-install.test.js', function () {
    describe('.installVersion()', function () {
        it('should install the version', function () {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.timeout(1000 * 60);
                            return [4 /*yield*/, solc_install_1.installVersion('0.4.24')];
                        case 1:
                            res = _a.sent();
                            assert.ok(res);
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('should already have the version', function () {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.timeout(1000 * 60);
                            return [4 /*yield*/, solc_install_1.installVersion('0.4.24')];
                        case 1:
                            res = _a.sent();
                            assert.equal(res, false);
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('should not run the same version when called in parallel', function () {
            return __awaiter(this, void 0, void 0, function () {
                var results, trues, falses;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.timeout(1000 * 60);
                            return [4 /*yield*/, Promise.all([
                                    solc_install_1.installVersion('0.4.21'),
                                    solc_install_1.installVersion('0.4.21'),
                                    solc_install_1.installVersion('0.4.21')
                                ])];
                        case 1:
                            results = _a.sent();
                            trues = results.filter(function (v) { return !!v; });
                            falses = results.filter(function (v) { return !v; });
                            assert.equal(trues.length, 1);
                            assert.equal(falses.length, 2);
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe('.solcInstall()', function () {
        it('should install all versions', function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.timeout(1000 * 60);
                            return [4 /*yield*/, solc_install_2.default([
                                    '0.4.22',
                                    '0.4.23',
                                    '0.4.23',
                                    '0.4.24'
                                ])];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('should throw for invalid version', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_test_util_1.default.assertThrows(function () { return solc_install_2.default([
                            '99.99.99'
                        ]); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=solc-install.test.js.map