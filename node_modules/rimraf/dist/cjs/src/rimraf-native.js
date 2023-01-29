"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rimrafNativeSync = exports.rimrafNative = void 0;
const fs_js_1 = require("./fs.js");
const { rm } = fs_js_1.promises;
const rimrafNative = (path, opt) => rm(path, {
    ...opt,
    force: true,
    recursive: true,
});
exports.rimrafNative = rimrafNative;
const rimrafNativeSync = (path, opt) => (0, fs_js_1.rmSync)(path, {
    ...opt,
    force: true,
    recursive: true,
});
exports.rimrafNativeSync = rimrafNativeSync;
//# sourceMappingURL=rimraf-native.js.map