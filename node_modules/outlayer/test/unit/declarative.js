QUnit.test( 'declarative', function( assert ) {
  var $ = window.jQuery;

  // data-cells-by-row, no data-cells-by-row-options
  ( function() {
    var container = document.querySelector('#declarative-attr');
    var cellsLayout = CellsByRow.data( container );
    assert.ok( cellsLayout instanceof CellsByRow, '.data() works, retrieves instance' );
    assert.deepEqual( cellsLayout.options, CellsByRow.defaults, 'options match defaults' );
    assert.ok( cellsLayout._isLayoutInited, 'cellsLayout._isLayoutInited' );
    var itemElem = cellsLayout.items[0].element;
    assert.equal( itemElem.style.left, '0px', 'first item style left set' );
    assert.equal( itemElem.style.top, '0px', 'first item style top set' );
  })();

  // data-cells-by-row, has data-cells-by-row-options, but bad JSON
  ( function() {
    var container = document.querySelector('#declarative-attr-bad-json');
    var cellsLayout = CellsByRow.data( container );
    assert.ok( !cellsLayout, 'bad JSON in data-cells-by-row-options does not init CellsByRow' );
    assert.ok( !container.outlayerGUID, 'no expando property on element' );
  })();

  // data-cells-by-row, has good data-packery-options
  ( function() {
    var container = document.querySelector('#declarative-attr-good-json');
    var cellsLayout = CellsByRow.data( container );
    assert.ok( cellsLayout instanceof CellsByRow, '.data() got CellByRow instance retrieved from element, with good JSON in data-cells-by-row-options' );
    assert.strictEqual( cellsLayout.options.columnWidth, 25, 'columnWidth option was set' );
    assert.strictEqual( cellsLayout.options.rowHeight, 30, 'rowHeight option was set' );
    assert.strictEqual( cellsLayout.options.isResizable, false, 'isResizable option was set' );
    assert.strictEqual( cellsLayout.options.foo, 'bar', 'foo option was set' );

    assert.equal( $.data( container, 'cellsByRow' ), cellsLayout, 'jQuery.data( elem, "cellsByRow") returns CellsByRow instance' );
  })();

  // js-cells-by-row, no data-cells-by-row-options
  ( function() {
    var container = document.querySelector('#declarative-js-class');
    var cellsLayout = CellsByRow.data( container );
    assert.ok( cellsLayout instanceof CellsByRow, '.data() works, retrieves instance' );
    assert.deepEqual( cellsLayout.options, CellsByRow.defaults, 'options match defaults' );
    assert.ok( cellsLayout._isLayoutInited, 'cellsLayout._isLayoutInited' );
    var itemElem = cellsLayout.items[0].element;
    assert.equal( itemElem.style.left, '0px', 'first item style left set' );
    assert.equal( itemElem.style.top, '0px', 'first item style top set' );
  })();

  // js-cells-by-row, has data-cells-by-row-options, but bad JSON
  ( function() {
    var container = document.querySelector('#declarative-js-class-bad-json');
    var cellsLayout = CellsByRow.data( container );
    assert.ok( !cellsLayout, 'bad JSON in data-cells-by-row-options does not init CellsByRow' );
    assert.ok( !container.outlayerGUID, 'no expando property on element' );
  })();

  // js-cells-by-row, has good data-packery-options
  ( function() {
    var container = document.querySelector('#declarative-js-class-good-json');
    var cellsLayout = CellsByRow.data( container );
    assert.ok( cellsLayout instanceof CellsByRow, '.data() got CellByRow instance retrieved from element, with good JSON in data-cells-by-row-options' );
    assert.strictEqual( cellsLayout.options.columnWidth, 25, 'columnWidth option was set' );
    assert.strictEqual( cellsLayout.options.rowHeight, 30, 'rowHeight option was set' );
    assert.strictEqual( cellsLayout.options.isResizable, false, 'isResizable option was set' );
    assert.strictEqual( cellsLayout.options.foo, 'bar', 'foo option was set' );

    assert.equal( $.data( container, 'cellsByRow' ), cellsLayout, 'jQuery.data( elem, "cellsByRow") returns CellsByRow instance' );
  })();

});
