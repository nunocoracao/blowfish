QUnit.test( 'getMeasurements', function( assert ) {
  var container = document.querySelector('#get-measurements');
  var layout = new CellsByRow( container, {
    itemSelector: '.item',
    columnWidth: 80,
    rowHeight: 65
  });

  assert.equal( layout.columnWidth, 80, 'columnWidth option set 80' );
  assert.equal( layout.rowHeight, 65, 'rowHeight option set 65' );

  var gridSizer = container.querySelector('.grid-sizer');

  layout.options.columnWidth = gridSizer;
  layout.options.rowHeight = gridSizer;
  layout.layout();

  assert.equal( layout.columnWidth, 75, 'columnWidth element sized as 75px' );
  assert.equal( layout.rowHeight, 90, 'rowHeight element sized as 90px' );

  gridSizer.style.width = '50%';
  layout.layout();

  assert.equal( layout.columnWidth, 100, 'columnWidth element sized as 50% => 100px' );

});
