/**
 * CellsByRow example
 */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
        '../outlayer'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    module.exports = factory(
      require('../outlayer')
    );
  } else {
    // browser global
    window.CellsByRow = factory(
      window.Outlayer
    );
  }

}( window, function factory( Outlayer) {
'use strict';

var CellsByRow = Outlayer.create( 'cellsByRow', {
  columnWidth: 100,
  rowHeight: 100
});

CellsByRow.prototype._resetLayout = function() {
  this.getSize();

  this._getMeasurement( 'columnWidth', 'outerWidth' );
  this._getMeasurement( 'rowHeight', 'outerHeight' );

  var isHorizontal = this._getOption('horizontal');
  if ( isHorizontal ) {
    this.rows = Math.floor( this.size.innerHeight / this.rowHeight );
    this.rows = Math.max( this.rows, 1 );
  } else {
    this.cols = Math.floor( this.size.innerWidth / this.columnWidth );
    this.cols = Math.max( this.cols, 1 );
  }

  this.itemIndex = 0;
};

CellsByRow.prototype._getItemLayoutPosition = function( item ) {
  item.getSize();
  var column, row;

  var isHorizontal = this._getOption('horizontal');
  if ( isHorizontal ) {
    row = this.itemIndex % this.rows;
    column = Math.floor( this.itemIndex / this.rows );
  } else {
    column = this.itemIndex % this.cols;
    row = Math.floor( this.itemIndex / this.cols );
  }
  var x = column * this.columnWidth;
  var y = row * this.rowHeight;
  this.itemIndex++;
  return {
    x: x,
    y: y
  };
};

CellsByRow.prototype._getContainerSize = function() {
  var isHorizontal = this._getOption('horizontal');
  if ( isHorizontal ) {
    return {
      width: Math.ceil( this.itemIndex / this.rows ) * this.columnWidth
    };
  } else {
    return {
      height: Math.ceil( this.itemIndex / this.cols ) * this.rowHeight
    };
  }
};

return CellsByRow;

}));
