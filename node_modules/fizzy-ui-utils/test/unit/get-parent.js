QUnit.test( 'getParent', function( assert ) {

  var getParent = fizzyUIUtils.getParent;

  var gridA = document.querySelector('.grid-a');
  var itemA1 = document.querySelector('.item-a1');

  var parent = getParent( itemA1, '.grid' );
  assert.equal( parent, gridA, 'got grid parent from item' );

  parent = getParent( document.querySelector('.span-a3'), '.grid' );
  assert.equal( parent, gridA, 'got grid parent from span' );

  parent = getParent( itemA1, '#qunit' );
  assert.ok( parent === undefined, 'parent not tree is undefined' );

  var treeNotInDocument = document.createElement('div');
  treeNotInDocument.innerHTML =
    '<div class="a">' +
      '<div class="a1">' +
    '</div>';

  parent = getParent( treeNotInDocument.querySelector('.a1'), '.not-found' );

  assert.ok(
    parent === undefined,
    'Parent should be `undefined` even when the given tree is not in the document'
  );

});
