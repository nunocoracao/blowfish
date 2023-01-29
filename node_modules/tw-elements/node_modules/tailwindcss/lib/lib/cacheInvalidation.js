"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasContentChanged = hasContentChanged;
var _crypto = _interopRequireDefault(require("crypto"));
var sharedState = _interopRequireWildcard(require("./sharedState"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
/**
 * Calculate the hash of a string.
 *
 * This doesn't need to be cryptographically secure or
 * anything like that since it's used only to detect
 * when the CSS changes to invalidate the context.
 *
 * This is wrapped in a try/catch because it's really dependent
 * on how Node itself is build and the environment and OpenSSL
 * version / build that is installed on the user's machine.
 *
 * Based on the environment this can just outright fail.
 *
 * See https://github.com/nodejs/node/issues/40455
 *
 * @param {string} str
 */ function getHash(str) {
    try {
        return _crypto.default.createHash("md5").update(str, "utf-8").digest("binary");
    } catch (err) {
        return "";
    }
}
function hasContentChanged(sourcePath, root) {
    let css = root.toString();
    // We only care about files with @tailwind directives
    // Other files use an existing context
    if (!css.includes("@tailwind")) {
        return false;
    }
    let existingHash = sharedState.sourceHashMap.get(sourcePath);
    let rootHash = getHash(css);
    let didChange = existingHash !== rootHash;
    sharedState.sourceHashMap.set(sourcePath, rootHash);
    return didChange;
}
