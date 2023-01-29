QUnit.test( 'origin', function( assert ) {

  var elem = document.querySelector('#origin');
  var layout = new CellsByRow( elem, {
    itemOptions: {
      transitionDuration: '0.1s'
    }
  });

  function checkItemPosition( itemIndex, x, y ) {
    var itemElem = layout.items[ itemIndex ].element;
    var message = 'item ' + itemIndex + ' ';
    var xProperty = layout.options.originLeft ? 'left' : 'right';
    var yProperty = layout.options.originTop ? 'top' : 'bottom';
    assert.equal( itemElem.style[ xProperty ], x + 'px', message + xProperty + ' = ' + x );
    assert.equal( itemElem.style[ yProperty ], y + 'px', message + yProperty + ' = ' + y );
  }

  // top left
  checkItemPosition( 0,   0,   0 );
  checkItemPosition( 1, 100,   0 );
  checkItemPosition( 2,   0, 100 );

  // top right
  layout.options.originLeft = false;
  layout.once( 'layoutComplete', function() {
    checkItemPosition( 0,   0,   0 );
    checkItemPosition( 1, 100,   0 );
    checkItemPosition( 2,   0, 100 );
    setTimeout( testBottomRight );
    // start();
  });

  var done = assert.async();

  layout.layout();

  // bottom right
  function testBottomRight() {
    layout.options.originTop = false;
    layout.once( 'layoutComplete', function() {
      checkItemPosition( 0,   0,   0 );
      checkItemPosition( 1, 100,   0 );
      checkItemPosition( 2,   0, 100 );
      setTimeout( testBottomLeft );
    });
    layout.layout();
  }

  // bottom right
  function testBottomLeft() {
    layout.options.originLeft = true;
    layout.once( 'layoutComplete', function() {
      checkItemPosition( 0,   0,   0 );
      checkItemPosition( 1, 100,   0 );
      checkItemPosition( 2,   0, 100 );
      done();
    });
    layout.layout();
  }

});
