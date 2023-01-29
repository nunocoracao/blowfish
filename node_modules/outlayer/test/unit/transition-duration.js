QUnit.test( 'transition duration', function( assert ) {

  var layout = new CellsByRow( '#transition-duration', {
    transitionDuration: '0s'
  });

  var done = assert.async();
  
  layout.options.columnWidth = 75;
  layout.options.rowHeight = 120;
  layout.once( 'layoutComplete', function() {
    assert.ok( true, 'layoutComplete triggered when transition duration = 0' );
    done();
  });

  layout.layout();

});
