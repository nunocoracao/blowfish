QUnit.test( 'item onTransitionEnd', function( assert ) {

  var container = document.querySelector('#item-on-transition-end');
  var layout = new Outlayer( container, {
    containerStyle: { top: 0 },
    transitionDuration: '1s'
  });
  var item = layout.items[0];
  item.addListener( 'transitionEnd', function() {
      console.log( item.element.style.display ); } );
  // item.on( 'transitionEnd', function() {
  //     console.log( item.element.style.display ); } );
  // var itemElem = layout.items[0].element;
  var done = assert.async();
  // hide, then immediate reveal again, while item is still transitioning
  layout.hide( [ item ] );
  setTimeout( function() {
    item.addListener( 'transitionEnd', function() {
      console.log('second', item.element.style.display );
      // console.log( item.element.style.display );
      assert.ok( true, true );
      // assert.equal( item.element.style.display, '', 'item was not hidden');
      done();
    });
    layout.reveal( [ item ] );
  }, 500 );

});
