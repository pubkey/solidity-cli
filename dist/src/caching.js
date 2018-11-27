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
/**
 * saves output to the cache
 * and retrieves it again,
 * so equal code does not have to be compiled multiple times
 */
var util = require("util");
var fs = require("fs");
var path = require("path");
var directoryExists = require('directory-exists');
var paths_1 = require("./paths");
var fileExists = util.promisify(fs.stat);
var writeFile = util.promisify(fs.writeFile);
var readFile = util.promisify(fs.readFile);
function ensureDirectoryExists() {
    return __awaiter(this, void 0, void 0, function () {
        var exists;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, directoryExists(paths_1.default.compileCache + '/')];
                case 1:
                    exists = _a.sent();
                    if (!exists) {
                        fs.mkdirSync(path.join(paths_1.default.compileCache, '../'));
                        fs.mkdirSync(paths_1.default.compileCache + '/');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function fileBySource(hash) {
    return path.join(paths_1.default.compileCache, hash + '.json');
}
function has(hash) {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fileExists(fileBySource(hash))];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
                case 2:
                    err_1 = _a.sent();
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.has = has;
function get(hash) {
    return __awaiter(this, void 0, void 0, function () {
        var content, artifact;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readFile(fileBySource(hash), 'utf-8')];
                case 1:
                    content = _a.sent();
                    artifact = JSON.parse(content);
                    return [2 /*return*/, artifact];
            }
        });
    });
}
exports.get = get;
function set(hash, artifact) {
    return __awaiter(this, void 0, void 0, function () {
        var fileContent, filePath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ensureDirectoryExists()];
                case 1:
                    _a.sent();
                    fileContent = JSON.stringify(artifact);
                    filePath = fileBySource(hash);
                    return [4 /*yield*/, writeFile(filePath, fileContent)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.set = set;
//# sourceMappingURL=caching.js.map