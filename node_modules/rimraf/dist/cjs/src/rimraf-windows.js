"use strict";
// This is the same as rimrafPosix, with the following changes:
//
// 1. EBUSY, ENFILE, EMFILE trigger retries and/or exponential backoff
// 2. All non-directories are removed first and then all directories are
//    removed in a second sweep.
// 3. If we hit ENOTEMPTY in the second sweep, fall back to move-remove on
//    the that folder.
//
// Note: "move then remove" is 2-10 times slower, and just as unreliable.
Object.defineProperty(exports, "__esModule", { value: true });
exports.rimrafWindowsSync = exports.rimrafWindows = void 0;
const path_1 = require("path");
const ignore_enoent_js_1 = require("./ignore-enoent.js");
const fix_eperm_js_1 = require("./fix-eperm.js");
const readdir_or_error_js_1 = require("./readdir-or-error.js");
const retry_busy_js_1 = require("./retry-busy.js");
const rimraf_move_remove_js_1 = require("./rimraf-move-remove.js");
const fs_js_1 = require("./fs.js");
const { unlink, rmdir } = fs_js_1.promises;
const rimrafWindowsFile = (0, retry_busy_js_1.retryBusy)((0, fix_eperm_js_1.fixEPERM)(unlink));
const rimrafWindowsFileSync = (0, retry_busy_js_1.retryBusySync)((0, fix_eperm_js_1.fixEPERMSync)(fs_js_1.unlinkSync));
const rimrafWindowsDir = (0, retry_busy_js_1.retryBusy)((0, fix_eperm_js_1.fixEPERM)(rmdir));
const rimrafWindowsDirSync = (0, retry_busy_js_1.retryBusySync)((0, fix_eperm_js_1.fixEPERMSync)(fs_js_1.rmdirSync));
const rimrafWindowsDirMoveRemoveFallback = async (path, opt) => {
    try {
        await rimrafWindowsDir(path, opt);
    }
    catch (er) {
        if (er?.code === 'ENOTEMPTY') {
            return await (0, rimraf_move_remove_js_1.rimrafMoveRemove)(path, opt);
        }
        throw er;
    }
};
const rimrafWindowsDirMoveRemoveFallbackSync = (path, opt) => {
    try {
        rimrafWindowsDirSync(path, opt);
    }
    catch (er) {
        if (er?.code === 'ENOTEMPTY') {
            return (0, rimraf_move_remove_js_1.rimrafMoveRemoveSync)(path, opt);
        }
        throw er;
    }
};
const START = Symbol('start');
const CHILD = Symbol('child');
const FINISH = Symbol('finish');
const states = new Set([START, CHILD, FINISH]);
const rimrafWindows = async (path, opt, state = START) => {
    if (!states.has(state)) {
        throw new TypeError('invalid third argument passed to rimraf');
    }
    const entries = await (0, readdir_or_error_js_1.readdirOrError)(path);
    if (!Array.isArray(entries)) {
        if (entries.code === 'ENOENT') {
            return;
        }
        if (entries.code !== 'ENOTDIR') {
            throw entries;
        }
        // is a file
        return (0, ignore_enoent_js_1.ignoreENOENT)(rimrafWindowsFile(path, opt));
    }
    await Promise.all(entries.map(entry => (0, exports.rimrafWindows)((0, path_1.resolve)(path, entry), opt, state === START ? CHILD : state)));
    if (state === START) {
        return (0, exports.rimrafWindows)(path, opt, FINISH);
    }
    else if (state === FINISH) {
        if (opt.preserveRoot === false && path === (0, path_1.parse)(path).root) {
            return;
        }
        return (0, ignore_enoent_js_1.ignoreENOENT)(rimrafWindowsDirMoveRemoveFallback(path, opt));
    }
};
exports.rimrafWindows = rimrafWindows;
const rimrafWindowsSync = (path, opt, state = START) => {
    if (!states.has(state)) {
        throw new TypeError('invalid third argument passed to rimraf');
    }
    const entries = (0, readdir_or_error_js_1.readdirOrErrorSync)(path);
    if (!Array.isArray(entries)) {
        if (entries.code === 'ENOENT') {
            return;
        }
        if (entries.code !== 'ENOTDIR') {
            throw entries;
        }
        // is a file
        return (0, ignore_enoent_js_1.ignoreENOENTSync)(() => rimrafWindowsFileSync(path, opt));
    }
    for (const entry of entries) {
        const s = state === START ? CHILD : state;
        (0, exports.rimrafWindowsSync)((0, path_1.resolve)(path, entry), opt, s);
    }
    if (state === START) {
        return (0, exports.rimrafWindowsSync)(path, opt, FINISH);
    }
    else if (state === FINISH) {
        if (opt.preserveRoot === false && path === (0, path_1.parse)(path).root) {
            return;
        }
        return (0, ignore_enoent_js_1.ignoreENOENTSync)(() => {
            rimrafWindowsDirMoveRemoveFallbackSync(path, opt);
        });
    }
};
exports.rimrafWindowsSync = rimrafWindowsSync;
//# sourceMappingURL=rimraf-windows.js.map