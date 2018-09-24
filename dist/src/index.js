"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var util = require("util");
var fs = require("fs");
var shelljs = require("shelljs");
var writeFile = util.promisify(fs.writeFile);
var read_code_1 = require("./read-code");
var read_code_2 = require("./read-code");
var read_code_3 = require("./read-code");
var caching = require("./caching");
var compile_1 = require("./compile");
var output_files_1 = require("./output-files");
var solc_install_1 = require("./solc-install");
/**
 * generates the output
 * or retrieves it from cache
 */
function generateOutput(source) {
    return __awaiter(this, void 0, void 0, function () {
        var isCached, artifact, compiled, artifact, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, caching.has(source.codeHash)];
                case 1:
                    isCached = _b.sent();
                    if (!isCached) return [3 /*break*/, 3];
                    return [4 /*yield*/, caching.get(source.codeHash)];
                case 2:
                    artifact = _b.sent();
                    return [2 /*return*/, artifact];
                case 3: return [4 /*yield*/, solc_install_1.installVersion(source.solcVersion)];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, compile_1.default(source)];
                case 5:
                    compiled = _b.sent();
                    _a = {
                        compiled: compiled
                    };
                    return [4 /*yield*/, output_files_1.createJavascriptFile(source, compiled)];
                case 6:
                    _a.javascript = _b.sent();
                    return [4 /*yield*/, output_files_1.createTypescriptFile(source, compiled)];
                case 7:
                    artifact = (_a.typescript = _b.sent(),
                        _a);
                    return [4 /*yield*/, caching.set(source.codeHash, artifact)];
                case 8:
                    _b.sent();
                    return [2 /*return*/, artifact];
            }
        });
    });
}
exports.generateOutput = generateOutput;
/**
 * compiles the code
 * use this if you dont want to generate files,
 * but only get the compiled output
 */
function compileCode(code) {
    return __awaiter(this, void 0, void 0, function () {
        var pseudoSource, artifact;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pseudoSource = {
                        filename: 'programatically',
                        code: code,
                        codeHash: read_code_1.hashCode(code),
                        solcVersion: read_code_3.getSolcVersion(code)
                    };
                    return [4 /*yield*/, generateOutput(pseudoSource)];
                case 1:
                    artifact = _a.sent();
                    return [2 /*return*/, artifact.compiled];
            }
        });
    });
}
exports.compileCode = compileCode;
function compileFile(fileName) {
    return __awaiter(this, void 0, void 0, function () {
        var source, artifact;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, read_code_1.readCodeFile(fileName)];
                case 1:
                    source = _a.sent();
                    return [4 /*yield*/, generateOutput(source)];
                case 2:
                    artifact = _a.sent();
                    return [2 /*return*/, artifact.compiled];
            }
        });
    });
}
exports.compileFile = compileFile;
function runCli(options) {
    return __awaiter(this, void 0, void 0, function () {
        var codeFiles, artifacts;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, read_code_2.default(options)];
                case 1:
                    codeFiles = _a.sent();
                    return [4 /*yield*/, Promise.all(codeFiles.map(function (source) { return __awaiter(_this, void 0, void 0, function () {
                            var artifact, outPath, fileNameFull;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, generateOutput(source)];
                                    case 1:
                                        artifact = _a.sent();
                                        outPath = output_files_1.outputPath(options, source);
                                        fileNameFull = outPath.split('\/').pop();
                                        return [2 /*return*/, {
                                                source: source,
                                                artifact: artifact,
                                                destinationFolder: path.join(outPath, '../'),
                                                fileName: fileNameFull.split('.').shift()
                                            }];
                                }
                            });
                        }); }))];
                case 2:
                    artifacts = _a.sent();
                    // create destination if not exists
                    if (options.destinationFolder) {
                        shelljs.mkdir('-p', options.destinationFolder);
                    }
                    // write to files
                    return [4 /*yield*/, Promise.all(artifacts.map(function (output) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, writeFile(path.join(output.destinationFolder, output.fileName + '.js'), output.artifact.javascript)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, writeFile(path.join(output.destinationFolder, output.fileName + '.ts'), output.artifact.typescript)];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 3:
                    // write to files
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.runCli = runCli;
//# sourceMappingURL=index.js.map