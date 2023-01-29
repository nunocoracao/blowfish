QUnit.test( 'addItems', function( assert ) {


  var olayer = new Outlayer( '#add-items', {
    itemSelector: '.item'
  });

  var elem = gimmeAnItemElement();
  var expectedItemCount = olayer.items.length;
  var items = olayer.addItems( elem );

  assert.equal( items.length, 1, 'method return array of 1' );
  assert.equal( olayer.items[2].element, elem, 'item was added, element matches' );
  assert.equal( items[0] instanceof Outlayer.Item, true, 'item is instance of Outlayer.Item' );
  expectedItemCount += 1;
  assert.equal( olayer.items.length, expectedItemCount, 'item added to items' );

  // try it with an array
  var elems = [ gimmeAnItemElement(), gimmeAnItemElement(), document.createElement('div') ];
  items = olayer.addItems( elems );
  assert.equal( items.length, 2, 'method return array of 2' );
  assert.equal( olayer.items[3].element, elems[0], 'item was added, element matches' );
  expectedItemCount += 2;
  assert.equal( olayer.items.length, expectedItemCount, 'two items added to items' );

  // try it with HTMLCollection / NodeList
  var fragment = document.createDocumentFragment();
  fragment.appendChild( gimmeAnItemElement() );
  fragment.appendChild( document.createElement('div') );
  fragment.appendChild( gimmeAnItemElement() );

  var divs = fragment.querySelectorAll('div');
  items = olayer.addItems( divs );
  assert.equal( items.length, 2, 'method return array of 2' );
  assert.equal( olayer.items[5].element, divs[0], 'item was added, element matches' );
  expectedItemCount += 2;
  assert.equal( olayer.items.length, expectedItemCount, 'two items added to items' );

});
