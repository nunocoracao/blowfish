import { promises, rmSync } from './fs.js';
const { rm } = promises;
export const rimrafNative = (path, opt) => rm(path, {
    ...opt,
    force: true,
    recursive: true,
});
export const rimrafNativeSync = (path, opt) => rmSync(path, {
    ...opt,
    force: true,
    recursive: true,
});
//# sourceMappingURL=rimraf-native.js.map