
QUnit.test( 'stamp selector string', function( assert ) {
  var container = document.querySelector('#stamps1');
  var stampElems = container.querySelectorAll('.stamp');
  var stamp1 = container.querySelector('.stamp1');
  var stamp2 = container.querySelector('.stamp2');

  var layout = new Outlayer( container, {
    stamp: '.stamp'
  });

  assert.equal( layout.stamps.length, stampElems.length, 'lenght matches' );
  assert.equal( layout.stamps[0], stamp1, 'stamp1 matches' );
  assert.equal( layout.stamps[1], stamp2, 'stamp2 matches' );
  assert.ok( !stamp1.style.left, 'stamp 1 has no left style' );
  assert.ok( !stamp1.style.top, 'stamp 1 has no top style' );

  layout.destroy();
});

QUnit.test( 'stamp with NodeList', function( assert ) {
  var container = document.querySelector('#stamps1');
  var stampElems = container.querySelectorAll('.stamp');
  var stamp1 = container.querySelector('.stamp1');
  var stamp2 = container.querySelector('.stamp2');

  var layout = new Outlayer( container, {
    stamp: stampElems
  });

  assert.equal( layout.stamps.length, stampElems.length, 'lenght matches' );
  assert.equal( layout.stamps[0], stamp1, 'stamp1 matches' );
  assert.equal( layout.stamps[1], stamp2, 'stamp2 matches' );

  layout.destroy();
});

QUnit.test( 'stamp with array', function( assert ) {
  var container = document.querySelector('#stamps1');
  var stampElems = container.querySelectorAll('.stamp');
  var stamp1 = container.querySelector('.stamp1');
  var stamp2 = container.querySelector('.stamp2');

  var layout = new Outlayer( container, {
    stamp: [ stamp1, stamp2 ]
  });

  assert.equal( layout.stamps.length, stampElems.length, 'lenght matches' );
  assert.equal( layout.stamps[0], stamp1, 'stamp1 matches' );
  assert.equal( layout.stamps[1], stamp2, 'stamp2 matches' );

  layout.destroy();
});

QUnit.test( 'stamp and unstamp method', function( assert ) {
  var container = document.querySelector('#stamps1');
  var stamp1 = container.querySelector('.stamp1');
  var stamp2 = container.querySelector('.stamp2');

  var layout = new Outlayer( container );

  assert.equal( layout.stamps.length, 0, 'start with 0 stamps' );

  layout.stamp( stamp1 );
  assert.equal( layout.stamps.length, 1, 'stamp length = 1' );
  assert.equal( layout.stamps[0], stamp1, 'stamp1 matches' );

  layout.stamp('.stamp2');
  assert.equal( layout.stamps.length, 2, 'stamp length = 2' );
  assert.equal( layout.stamps[0], stamp1, 'stamp1 matches' );
  assert.equal( layout.stamps[1], stamp2, 'stamp2 matches' );

  layout.unstamp('.stamp1');
  assert.equal( layout.stamps.length, 1, 'unstamped, and stamp length = 1' );
  assert.equal( layout.stamps[0], stamp2, 'stamp2 matches' );
});
