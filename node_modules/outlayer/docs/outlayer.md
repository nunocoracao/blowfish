# Outlayer

``` js
/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {}
```

## Prototype methods

``` js
/**
 * set options
 * @param {Object} opts
 */
Outlayer.prototype.option = function( opts ) {}

Outlayer.prototype._create = function() {}

// goes through all children again and gets bricks in proper order
Outlayer.prototype.reloadItems = function() {}

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
Outlayer.prototype._getItems = function( elems ) {}

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
Outlayer.prototype._filterFindItemElements = function( elems ) {}

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
Outlayer.prototype.getItemElements = function() {}

// ----- layout ----- //

/**
 * lays out all items
 */
Outlayer.prototype.layout = function() {}

/**
 * logic before any new layout
 */
Outlayer.prototype._resetLayout = function() {}

Outlayer.prototype.getSize = function() {}

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
Outlayer.prototype._getMeasurement = function( measurement, size ) {}

/**
 * layout a collection of item elements
 */
Outlayer.prototype.layoutItems = function( items, isInstant ) {}

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
Outlayer.prototype._layoutItem = function( item, x, y, isInstant ) {}

/**
 * trigger a callback for a collection of items events
 * @param {Array} items - Outlayer.Items
 * @param {String} eventName
 * @param {Function} callback
 */
Outlayer.prototype._itemsOn = function( items, eventName, callback ) {}

// ----- resize ----- //

/**
 * Bind layout to window resizing
 */
Outlayer.prototype.bindResize = function() {}

/**
 * Unbind layout to window resizing
 */
Outlayer.prototype.unbindResize = function() {

// debounced, layout on resize
Outlayer.prototype.resize = function() {}

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
Outlayer.prototype.addItems = function( elems ) {}

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.appended = function( elems ) {}

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.prepended = function( elems ) {}

// reveal a collection of items
Outlayer.prototype.reveal = function( items ) {}

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
Outlayer.prototype.getItem = function( elem ) {}

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
Outlayer.prototype.getItems = function( elems ) {}

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.remove = function( elems ) {}

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
Outlayer.prototype.reveal = function( items ) {}

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
Outlayer.prototype.hide = function( items ) {}

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
Outlayer.prototype.revealItemElements = function( elems ) {}

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
Outlayer.prototype.hideItemElements = function( elems ) {}

// remove and disable Outlayer instance
Outlayer.prototype.destroy = function() {}

```

## Utility methods

``` js

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {}

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace ) {}
```


## Options

+ containerStyle `{ position: 'relative' }`
+ initLayout or isInitLayout `true`
+ layoutInstant or isLayoutInstant
+ originLeft or isOriginLeft `true`
+ originTop or isOriginTop `true`
+ resize or isResizeBound `true`
+ resizeContainer or isResizingContainer `true`
+ itemOptions
+ itemSelector
+ stamp
+ percentPosition
