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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var cache_1 = require("./cache");
var output_files_1 = require("../../src/output-files");
var caching = require("../../src/caching");
describe('caching.test.js', function () {
    describe('.set()', function () {
        it('should write to cache', function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, source, compiled, javascript, typescript;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, cache_1.basicCompiled()];
                    case 1:
                        _a = _b.sent(), source = _a.source, compiled = _a.compiled;
                        return [4 /*yield*/, output_files_1.createJavascriptFile(source, compiled)];
                    case 2:
                        javascript = _b.sent();
                        return [4 /*yield*/, output_files_1.createTypescriptFile(source, compiled)];
                    case 3:
                        typescript = _b.sent();
                        return [4 /*yield*/, caching.set(source.codeHash, {
                                compiled: compiled,
                                javascript: javascript,
                                typescript: typescript
                            })];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('.has()', function () {
        it('should not have this in cache', function () { return __awaiter(_this, void 0, void 0, function () {
            var source, has;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cache_1.basicCompiled()];
                    case 1:
                        source = (_a.sent()).source;
                        source.codeHash = 'foobar';
                        return [4 /*yield*/, caching.has(source.codeHash)];
                    case 2:
                        has = _a.sent();
                        assert.equal(has, false);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should have cached the output', function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, source, compiled, javascript, typescript, has;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, cache_1.basicCompiled()];
                    case 1:
                        _a = _b.sent(), source = _a.source, compiled = _a.compiled;
                        return [4 /*yield*/, output_files_1.createJavascriptFile(source, compiled)];
                    case 2:
                        javascript = _b.sent();
                        return [4 /*yield*/, output_files_1.createTypescriptFile(source, compiled)];
                    case 3:
                        typescript = _b.sent();
                        return [4 /*yield*/, caching.set(source.codeHash, {
                                compiled: compiled,
                                javascript: javascript,
                                typescript: typescript
                            })];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, caching.has(source.codeHash)];
                    case 5:
                        has = _b.sent();
                        assert.equal(has, true);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('.get()', function () {
        it('should return the cached artifact', function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, source, compiled, javascript, typescript, artifact;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, cache_1.basicCompiled()];
                    case 1:
                        _a = _b.sent(), source = _a.source, compiled = _a.compiled;
                        return [4 /*yield*/, output_files_1.createJavascriptFile(source, compiled)];
                    case 2:
                        javascript = _b.sent();
                        return [4 /*yield*/, output_files_1.createTypescriptFile(source, compiled)];
                    case 3:
                        typescript = _b.sent();
                        return [4 /*yield*/, caching.set(source.codeHash, {
                                compiled: compiled,
                                javascript: javascript,
                                typescript: typescript
                            })];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, caching.get(source.codeHash)];
                    case 5:
                        artifact = _b.sent();
                        assert.deepEqual(artifact, {
                            compiled: compiled,
                            javascript: javascript,
                            typescript: typescript
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=caching.test.js.map