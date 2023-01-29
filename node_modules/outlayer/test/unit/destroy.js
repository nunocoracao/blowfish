QUnit.test( 'destroy', function( assert ) {

  var container = document.querySelector('#destroy');
  var layout = new CellsByRow( container );

  layout.destroy();

  assert.ok( !CellsByRow.data( container ), '.data() returns falsey' );

  function checkStyle( elem, property ) {
    assert.ok( !elem.style[ property ], elem + ' has no ' + property + ' style' );
  }

  checkStyle( container, 'height' );
  checkStyle( container, 'position' );

  var items = container.querySelectorAll('.item');
  for ( var i=0, len = items.length; i < len; i++ ) {
    var itemElem = items[i];
    checkStyle( itemElem, 'position' );
    checkStyle( itemElem, 'left' );
    checkStyle( itemElem, 'top' );
  }

  // try to force a resize
  container.style.width = '300px';
  layout.resize();

  checkStyle( container, 'height' );
  checkStyle( container, 'position' );
  checkStyle( items[0], 'position' );
  checkStyle( items[0], 'left' );
  checkStyle( items[0], 'top' );

});
