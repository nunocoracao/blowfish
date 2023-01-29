QUnit.test( 'filterFindElements', function( assert ) {

  var gridB = document.querySelector('.grid-b');

  var itemElems = fizzyUIUtils.filterFindElements( gridB.children, '.item' );
  assert.equal( itemElems.length, 4, '4 items filter/found' );

});
