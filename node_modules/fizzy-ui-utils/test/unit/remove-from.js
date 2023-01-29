QUnit.test( 'removeFrom', function( assert ) {

  var removeFrom = fizzyUIUtils.removeFrom;

  var ary = [ 0, 1, 2, 3, 4, 5, 6 ];
  var len = ary.length;

  removeFrom( ary, 2 );
  var ary2 = [ 0, 1, 3, 4, 5, 6 ];
  assert.deepEqual( ary, ary2, '2 removed' );
  removeFrom( ary, 8 );
  assert.deepEqual( ary, ary2, '8 not removed' );

});
