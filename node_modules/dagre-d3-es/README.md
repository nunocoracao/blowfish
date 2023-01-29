# dagre-d3-es

The [dagre-d3](https://github.com/dagrejs) library is not maintained anymore.

[dagre-d3-es](https://www.npmjs.com/package/dagre-d3-es) is a fork using the more modern ES6 javascript syntax.
It uses [ES](https://262.ecma-international.org/6.0/) modules, thus the name [dagre-d3-es](https://www.npmjs.com/package/dagre-d3-es).

[dagre-d3-es](https://www.npmjs.com/package/dagre-d3-es) follows [d3](https://www.npmjs.com/package/d3) versions. Ex: dagre-d3-es version 7 depends on [d3](https://www.npmjs.com/package/d3) version 7.

## Demos

[Simple graph demo](https://codesandbox.io/s/dagre-d3-es-tree-9ywg9) using react, dagre-d3-es, [d3](https://www.npmjs.com/package/d3) version 7.2.

## Install

```
npm install dagre-d3-es --save
```

## Code example

Coming from the legacy `dagre-d3`, the main changes in your code will be:

```
import * as dagreD3 from 'dagre-d3-es';
...
const g = new dagreD3.graphlib.Graph().setGraph({});
...
const zoom = d3.zoom().on('zoom', (zoomEvent) => {
  inner.attr('transform', zoomEvent.transform);
});

```
