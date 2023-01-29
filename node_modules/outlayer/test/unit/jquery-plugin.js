
QUnit.test( 'jQuery plugin', function( assert ) {
  var $ = window.jQuery;

  var $elem = $('#jquery');
  assert.ok( $.fn.cellsByRow, '.cellsByRow is in jQuery.fn namespace' );
  assert.equal( typeof $elem.cellsByRow, 'function', '.cellsByRow is a plugin' );
  $elem.cellsByRow();
  var layout = $elem.data('cellsByRow');
  assert.ok( layout, 'CellsByRow instance via .data()' );
  assert.equal( layout, CellsByRow.data( $elem[0] ), 'instance matches the same one via CellsByRow.data()' );

  // destroy and re-init
  $elem.cellsByRow('destroy');
  $elem.cellsByRow();
  assert.notEqual( $elem.data('cellsByRow'), layout, 'new CellsByRow instance after destroy' );

});
