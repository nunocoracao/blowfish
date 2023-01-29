QUnit.test( 'create Layouts', function( assert ) {

  var Leiout = Outlayer.create('leiout');
  Leiout.Item.prototype.foo = 'bar';
  Leiout.compatOptions.fitWidth = 'isFitWidth';
  var elem = document.createElement('div');
  var lei = new Leiout( elem, {
    isFitWidth: 300
  });
  var outlayr = new Outlayer( elem );

  assert.equal( typeof CellsByRow, 'function', 'CellsByRow is a function' );
  assert.equal( CellsByRow.namespace, 'cellsByRow', 'cellsByRow namespace' );
  assert.equal( Outlayer.namespace, 'outlayer', 'Outlayer namespace unchanged' );
  assert.equal( Leiout.namespace, 'leiout', 'Leiout namespace' );
  assert.equal( CellsByRow.defaults.resize, true, 'resize option there' );
  assert.equal( CellsByRow.defaults.columnWidth, 100, 'columnWidth option set' );
  assert.strictEqual( Outlayer.defaults.columnWidth, undefined, 'Outlayer has no default columnWidth' );
  assert.strictEqual( Leiout.defaults.columnWidth, undefined, 'Leiout has no default columnWidth' );
  assert.equal( lei.constructor.Item, Leiout.Item, 'Leiout.Item is on constructor.Item' );
  assert.equal( lei._getOption('fitWidth'), 300, 'backwards compatible _getOption' );
  assert.equal( outlayr.constructor.Item, Outlayer.Item, 'outlayr.Item is still correct Item' );

});
