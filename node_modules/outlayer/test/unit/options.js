QUnit.test( 'options', function( assert ) {
  var container = document.querySelector('#options');
  var olayer = new Outlayer( container, {
    initLayout: false,
    transitionDuration: '600ms'
  });

  assert.ok( !olayer._isLayoutInited, 'olayer is not layout initialized' );
  assert.equal( olayer.options.transitionDuration, '600ms', 'transition option set');

});
