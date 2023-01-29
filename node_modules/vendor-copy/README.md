# vendor-copy

A utility to copy client-side dependencies into a folder. It looks for a
`vendorCopy` field in your `package.json`, which contains an array of objects,
each with a `to` and `from` field, which are paths relative to the
`package.json` file.


## npm script Usage

The CLI looks for configuration in a package.json file. It assumes that it's
being run from the same directory as the package file. This makes it ideal to
use as an npm script in the package file. For example (note in particular the
`postinstall` script):

```javascript
{
  "scripts": {
    "preinstall": "rimraf public/vendor"
    "postinstall": "vendor-copy"
  },
  "dependencies": {
    "someDependency": "1.0.0",
    "someOtherDependency": "0.1.2",
    "vendorCopy": "1",
    "rimraf": "2"
  },
  "devDependencies": {
    "someDevelopmentDependency": "4.3.2"
  },
  "vendorCopy": [
    {
      "from": "node_modules/someDependency/someDependency.js",
      "to": "public/vendor/someDependency.js"
    },
    {
      "from": "node_modules/someOtherDependency/someOtherDependency.js",
      "to": "public/vendor/someOtherDependency.js"
    }
  ],
  "devVendorCopy": [
    {
      "from": "node_modules/someDevelopmentDependency/someDevelopmentDependency.js",
      "to": "public/vendor/someDevelopmentDependency.js"
    }
  ]
}
```

When `npm install` is used and has completed the installation of both
dependencies and development dependencies, it will copy items listed in
`"vendorCopy"` and `"devVendorCopy"`. When run in production mode, i.e. when
the `NODE_ENV` environment variable is `production` or when npm in invoked with
the `--production` flag, only items in `vendorCopy` are copied. In both cases
`rimraf` has been used to delete the `public/vendor` to ensure a clean copy.

## JS API

```javascript
const vendorCopy = require('vendor-copy');
```

### `const promise = vendorCopy(root, copyItems)`;

 - `root` is an absolute base path.
 - `copyItems` is an array of objects with `from` and `to` file paths.

`root` is prepended to all `from` and `to` paths. Each `from` resolves to a file
or directory, and will be copied to the `to` location. Intermediate directories
will be created as required.

The returned promise resolves when copying is complete. The resolution value is
an array like `copyItems`, but each `from` and `to` field is an absolute path.
