"use strict";
// the simple recursive removal, where unlink and rmdir are atomic
// Note that this approach does NOT work on Windows!
// We rmdir before unlink even though that is arguably less efficient
// (since the average folder contains >1 file, it means more system
// calls), because sunos will let root unlink a directory, and some
// SUPER weird breakage happens as a result.
Object.defineProperty(exports, "__esModule", { value: true });
exports.rimrafPosixSync = exports.rimrafPosix = void 0;
const fs_js_1 = require("./fs.js");
const { rmdir, unlink } = fs_js_1.promises;
const path_1 = require("path");
const readdir_or_error_js_1 = require("./readdir-or-error.js");
const ignore_enoent_js_1 = require("./ignore-enoent.js");
const rimrafPosix = async (path, opt) => {
    const entries = await (0, readdir_or_error_js_1.readdirOrError)(path);
    if (!Array.isArray(entries)) {
        if (entries.code === 'ENOENT') {
            return;
        }
        if (entries.code !== 'ENOTDIR') {
            throw entries;
        }
        return (0, ignore_enoent_js_1.ignoreENOENT)(unlink(path));
    }
    await Promise.all(entries.map(entry => (0, exports.rimrafPosix)((0, path_1.resolve)(path, entry), opt)));
    // we don't ever ACTUALLY try to unlink /, because that can never work
    // but when preserveRoot is false, we could be operating on it.
    // No need to check if preserveRoot is not false.
    if (opt.preserveRoot === false && path === (0, path_1.parse)(path).root) {
        return;
    }
    return (0, ignore_enoent_js_1.ignoreENOENT)(rmdir(path));
};
exports.rimrafPosix = rimrafPosix;
const rimrafPosixSync = (path, opt) => {
    const entries = (0, readdir_or_error_js_1.readdirOrErrorSync)(path);
    if (!Array.isArray(entries)) {
        if (entries.code === 'ENOENT') {
            return;
        }
        if (entries.code !== 'ENOTDIR') {
            throw entries;
        }
        return (0, ignore_enoent_js_1.ignoreENOENTSync)(() => (0, fs_js_1.unlinkSync)(path));
    }
    for (const entry of entries) {
        (0, exports.rimrafPosixSync)((0, path_1.resolve)(path, entry), opt);
    }
    if (opt.preserveRoot === false && path === (0, path_1.parse)(path).root) {
        return;
    }
    return (0, ignore_enoent_js_1.ignoreENOENTSync)(() => (0, fs_js_1.rmdirSync)(path));
};
exports.rimrafPosixSync = rimrafPosixSync;
//# sourceMappingURL=rimraf-posix.js.map