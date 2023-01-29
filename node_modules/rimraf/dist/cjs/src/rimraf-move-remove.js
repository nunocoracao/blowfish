"use strict";
// https://youtu.be/uhRWMGBjlO8?t=537
//
// 1. readdir
// 2. for each entry
//   a. if a non-empty directory, recurse
//   b. if an empty directory, move to random hidden file name in $TEMP
//   c. unlink/rmdir $TEMP
//
// This works around the fact that unlink/rmdir is non-atomic and takes
// a non-deterministic amount of time to complete.
//
// However, it is HELLA SLOW, like 2-10x slower than a naive recursive rm.
Object.defineProperty(exports, "__esModule", { value: true });
exports.rimrafMoveRemoveSync = exports.rimrafMoveRemove = void 0;
const path_1 = require("path");
const default_tmp_js_1 = require("./default-tmp.js");
const ignore_enoent_js_1 = require("./ignore-enoent.js");
const fs_js_1 = require("./fs.js");
const { rename, unlink, rmdir, chmod } = fs_js_1.promises;
const readdir_or_error_js_1 = require("./readdir-or-error.js");
// crypto.randomBytes is much slower, and Math.random() is enough here
const uniqueFilename = (path) => `.${(0, path_1.basename)(path)}.${Math.random()}`;
const unlinkFixEPERM = async (path) => unlink(path).catch((er) => {
    if (er.code === 'EPERM') {
        return chmod(path, 0o666).then(() => unlink(path), er2 => {
            if (er2.code === 'ENOENT') {
                return;
            }
            throw er;
        });
    }
    else if (er.code === 'ENOENT') {
        return;
    }
    throw er;
});
const unlinkFixEPERMSync = (path) => {
    try {
        (0, fs_js_1.unlinkSync)(path);
    }
    catch (er) {
        if (er?.code === 'EPERM') {
            try {
                return (0, fs_js_1.chmodSync)(path, 0o666);
            }
            catch (er2) {
                if (er2?.code === 'ENOENT') {
                    return;
                }
                throw er;
            }
        }
        else if (er?.code === 'ENOENT') {
            return;
        }
        throw er;
    }
};
const rimrafMoveRemove = async (path, opt) => {
    if (!opt.tmp) {
        return (0, exports.rimrafMoveRemove)(path, { ...opt, tmp: await (0, default_tmp_js_1.defaultTmp)(path) });
    }
    if (path === opt.tmp && (0, path_1.parse)(path).root !== path) {
        throw new Error('cannot delete temp directory used for deletion');
    }
    const entries = await (0, readdir_or_error_js_1.readdirOrError)(path);
    if (!Array.isArray(entries)) {
        if (entries.code === 'ENOENT') {
            return;
        }
        if (entries.code !== 'ENOTDIR') {
            throw entries;
        }
        return await (0, ignore_enoent_js_1.ignoreENOENT)(tmpUnlink(path, opt.tmp, unlinkFixEPERM));
    }
    await Promise.all(entries.map(entry => (0, exports.rimrafMoveRemove)((0, path_1.resolve)(path, entry), opt)));
    // we don't ever ACTUALLY try to unlink /, because that can never work
    // but when preserveRoot is false, we could be operating on it.
    // No need to check if preserveRoot is not false.
    if (opt.preserveRoot === false && path === (0, path_1.parse)(path).root) {
        return;
    }
    return await (0, ignore_enoent_js_1.ignoreENOENT)(tmpUnlink(path, opt.tmp, rmdir));
};
exports.rimrafMoveRemove = rimrafMoveRemove;
const tmpUnlink = async (path, tmp, rm) => {
    const tmpFile = (0, path_1.resolve)(tmp, uniqueFilename(path));
    await rename(path, tmpFile);
    return await rm(tmpFile);
};
const rimrafMoveRemoveSync = (path, opt) => {
    if (!opt.tmp) {
        return (0, exports.rimrafMoveRemoveSync)(path, { ...opt, tmp: (0, default_tmp_js_1.defaultTmpSync)(path) });
    }
    const tmp = opt.tmp;
    if (path === opt.tmp && (0, path_1.parse)(path).root !== path) {
        throw new Error('cannot delete temp directory used for deletion');
    }
    const entries = (0, readdir_or_error_js_1.readdirOrErrorSync)(path);
    if (!Array.isArray(entries)) {
        if (entries.code === 'ENOENT') {
            return;
        }
        if (entries.code !== 'ENOTDIR') {
            throw entries;
        }
        return (0, ignore_enoent_js_1.ignoreENOENTSync)(() => tmpUnlinkSync(path, tmp, unlinkFixEPERMSync));
    }
    for (const entry of entries) {
        (0, exports.rimrafMoveRemoveSync)((0, path_1.resolve)(path, entry), opt);
    }
    if (opt.preserveRoot === false && path === (0, path_1.parse)(path).root) {
        return;
    }
    return (0, ignore_enoent_js_1.ignoreENOENTSync)(() => tmpUnlinkSync(path, tmp, fs_js_1.rmdirSync));
};
exports.rimrafMoveRemoveSync = rimrafMoveRemoveSync;
const tmpUnlinkSync = (path, tmp, rmSync) => {
    const tmpFile = (0, path_1.resolve)(tmp, uniqueFilename(path));
    (0, fs_js_1.renameSync)(path, tmpFile);
    return rmSync(tmpFile);
};
//# sourceMappingURL=rimraf-move-remove.js.map