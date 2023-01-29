QUnit.test( 'prepend', function( assert ) {
  var container = document.querySelector('#prepend');
  var olayer = new Outlayer( container );
  var itemElemA = olayer.items[0].element;
  var itemElemB = olayer.items[1].element;
  var itemElemC = gimmeAnItemElement();
  itemElemC.style.background = 'orange';
  var itemElemD = gimmeAnItemElement();
  itemElemD.style.background = 'magenta';

  // TODO re-enable this, possible with CellsByRow
  // var ticks = 0;

  // olayer.on( 'layoutComplete', function() {
  //   assert.ok( true, 'layoutComplete triggered' );
  //   ticks++;
  //   if ( ticks == 2 ) {
  //     assert.ok( true, '2 layoutCompletes triggered' );
  //     start();
  //   }
  // });
  // 
  // stop();
  var fragment = document.createDocumentFragment();
  fragment.appendChild( itemElemC );
  fragment.appendChild( itemElemD );
  container.insertBefore( fragment, container.firstChild );
  olayer.prepended([ itemElemC, itemElemD ]);

  assert.equal( olayer.items[0].element, itemElemC, 'item C is first' );
  assert.equal( olayer.items[1].element, itemElemD, 'item D is second' );
  assert.equal( olayer.items[2].element, itemElemA, 'item A is third' );
  assert.equal( olayer.items[3].element, itemElemB, 'item B is fourth' );

});
