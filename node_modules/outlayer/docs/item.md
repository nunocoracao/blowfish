# Item

## Prototype methods

``` js

Item.prototype._create = function() {}

Item.prototype.getSize = function() {}

/**
 * apply CSS styles to element
 * @param {Object} style
 */
Item.prototype.css = function( style ) {}

// measure position, and sets it
Item.prototype.getPosition = function() {}

// moves position with transition
Item.prototype.moveTo = function( x, y ) {}

// moves position instantly
Item.prototype.goTo = function( x, y ) {}

/**
 * sets CSS transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
Item.prototype.transition = function( args ) {}

/**
 * removes style property from element
 * @param {Object} style
**/
Item.prototype._removeStyles = function( style ) {}

Item.prototype.removeTransitionStyles = function() {}

// hides, then removes element from DOM
Item.prototype.remove = function() {};

Item.prototype.reveal = function() {}

Item.prototype.hide = function() {}

Item.prototype.destroy = function() {}
```

## Options

+ transitionDuration
+ hiddenStyle
+ visibleStyle
