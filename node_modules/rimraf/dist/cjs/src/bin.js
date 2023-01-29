#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = void 0;
const package_json_1 = require("../package.json");
const index_cjs_js_1 = __importDefault(require("./index-cjs.js"));
const runHelpForUsage = () => console.error('run `rimraf --help` for usage information');
exports.help = `rimraf version ${package_json_1.version}

Usage: rimraf <path> [<path> ...]
Deletes all files and folders at "path", recursively.

Options:
  --                  Treat all subsequent arguments as paths
  -h --help           Display this usage info
  --preserve-root     Do not remove '/' recursively (default)
  --no-preserve-root  Do not treat '/' specially

  --impl=<type>       Specify the implementationt to use.
                      rimraf: choose the best option
                      native: the built-in implementation in Node.js
                      manual: the platform-specific JS implementation
                      posix: the Posix JS implementation
                      windows: the Windows JS implementation
                      move-remove: a slower Windows JS fallback implementation

Implementation-specific options:
  --tmp=<path>        Folder to hold temp files for 'move-remove' implementation
  --max-retries=<n>   maxRetries for the 'native' and 'windows' implementations
  --retry-delay=<n>   retryDelay for the 'native' implementation, default 100
  --backoff=<n>       Exponential backoff factor for retries (default: 1.2)
`;
const path_1 = require("path");
const main = async (...args) => {
    if (process.env.__RIMRAF_TESTING_BIN_FAIL__ === '1') {
        throw new Error('simulated rimraf failure');
    }
    const opt = {};
    const paths = [];
    let dashdash = false;
    let impl = index_cjs_js_1.default;
    for (const arg of args) {
        if (dashdash) {
            paths.push(arg);
            continue;
        }
        if (arg === '--') {
            dashdash = true;
            continue;
        }
        else if (arg === '-h' || arg === '--help') {
            console.log(exports.help);
            return 0;
        }
        else if (arg === '--preserve-root') {
            opt.preserveRoot = true;
            continue;
        }
        else if (arg === '--no-preserve-root') {
            opt.preserveRoot = false;
            continue;
        }
        else if (/^--tmp=/.test(arg)) {
            const val = arg.substring('--tmp='.length);
            opt.tmp = val;
            continue;
        }
        else if (/^--max-retries=/.test(arg)) {
            const val = +arg.substring('--max-retries='.length);
            opt.maxRetries = val;
            continue;
        }
        else if (/^--retry-delay=/.test(arg)) {
            const val = +arg.substring('--retry-delay='.length);
            opt.retryDelay = val;
            continue;
        }
        else if (/^--backoff=/.test(arg)) {
            const val = +arg.substring('--backoff='.length);
            opt.backoff = val;
            continue;
        }
        else if (/^--impl=/.test(arg)) {
            const val = arg.substring('--impl='.length);
            switch (val) {
                case 'rimraf':
                    impl = index_cjs_js_1.default;
                    continue;
                case 'native':
                case 'manual':
                case 'posix':
                case 'windows':
                    impl = index_cjs_js_1.default[val];
                    continue;
                case 'move-remove':
                    impl = index_cjs_js_1.default.moveRemove;
                    continue;
                default:
                    console.error(`unknown implementation: ${val}`);
                    runHelpForUsage();
                    return 1;
            }
        }
        else if (/^-/.test(arg)) {
            console.error(`unknown option: ${arg}`);
            runHelpForUsage();
            return 1;
        }
        else {
            paths.push(arg);
        }
    }
    if (opt.preserveRoot !== false) {
        for (const path of paths.map(p => (0, path_1.resolve)(p))) {
            if (path === (0, path_1.parse)(path).root) {
                console.error(`rimraf: it is dangerous to operate recursively on '/'`);
                console.error('use --no-preserve-root to override this failsafe');
                return 1;
            }
        }
    }
    if (!paths.length) {
        console.error('rimraf: must provide a path to remove');
        runHelpForUsage();
        return 1;
    }
    await impl(paths, opt);
    return 0;
};
main.help = exports.help;
exports.default = main;
if (typeof require === 'function' &&
    typeof module === 'object' &&
    require.main === module) {
    const args = process.argv.slice(2);
    main(...args).then(code => process.exit(code), er => {
        console.error(er);
        process.exit(1);
    });
}
//# sourceMappingURL=bin.js.map