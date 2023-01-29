QUnit.test( 'makeArray', function( assert ) {

  var makeArray = fizzyUIUtils.makeArray;

  var aryA = [ 0, 1, 2 ];
  var aryB = makeArray( aryA );
  assert.deepEqual( aryA, aryB, 'makeArray on array returns same array' );

  var itemElems = document.querySelectorAll('.grid-a .item');
  var items = makeArray( itemElems );
  assert.ok( Array.isArray( items ), 'makeArray on querySelectorAll NodeList' );
  assert.equal( items.length, itemElems.length, 'length matches' );

  var grids = makeArray( document.querySelector('.grid-a') );
  assert.ok( Array.isArray( grids ), 'makeArray on single element is array' );
  assert.equal( grids.length, 1, 'length = 1' );

  var empty = makeArray();
  assert.deepEqual( empty, [], 'makeArray on undefined is empty array' );
  assert.equal( empty.length, 0, 'length = 0' );
  assert.ok( empty[0] === undefined, '[0] is undefined' );

  // isotope#1235
  var aryC = makeArray('foo');
  assert.deepEqual( aryC, [ 'foo' ], 'string turns to single array item' );

  var nullAry = makeArray( null );
  assert.deepEqual( nullAry, [], 'makeArray(null) returns empty array' );

  var falseAry = makeArray( false );
  assert.deepEqual( falseAry, [ false ], 'makeArray(false) returns array with false' );
  assert.equal( falseAry.length, 1, 'falseyAry has 1 item' );

});
