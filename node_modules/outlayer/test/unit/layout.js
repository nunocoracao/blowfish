QUnit.test( 'layout', function( assert ) {

  var cellsLayout = new CellsByRow( document.querySelector('#layout') );
  var items = cellsLayout.items;
  assert.ok( cellsLayout._isLayoutInited, '_isLayoutInited' );
  
  var done = assert.async();

  cellsLayout.once( 'layoutComplete', function onLayout( layoutItems ) {
    assert.ok( true, 'layoutComplete event did fire' );
    assert.equal( layoutItems.length, items.length, 'event-emitted items matches layout items length' );
    assert.strictEqual( layoutItems[0], items[0], 'event-emitted items has same first item' );
    var len = layoutItems.length - 1;
    assert.strictEqual( layoutItems[ len ], items[ len ], 'event-emitted items has same last item' );
    done();
  });

  cellsLayout.options.columnWidth = 60;
  cellsLayout.options.rowHeight = 60;
  cellsLayout.layout();

});
