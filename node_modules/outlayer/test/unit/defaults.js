QUnit.test( 'defaults', function( assert ) {
  var container = document.querySelector('#defaults');
  var olayer = new Outlayer( container );
  var item = olayer.items[0];
  assert.deepEqual( olayer.options, Outlayer.defaults, 'default options match prototype' );
  assert.equal( typeof olayer.items, 'object', 'items is object' );
  assert.equal( olayer.items.length, 1, 'one item' );
  assert.equal( Outlayer.data( container ), olayer, 'data method returns instance' );
  assert.ok( olayer.resize, 'resize' );

  assert.deepEqual( item.options, Outlayer.Item.prototype.options, 'default item options match Outlayer.Item' );

});
