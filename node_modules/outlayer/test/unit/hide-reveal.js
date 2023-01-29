QUnit.test( 'hide/reveal', function( assert ) {

  var CellsByRow = window.CellsByRow;
  var gridElem = document.querySelector('#hide-reveal');

  var layout = new CellsByRow( gridElem, {
    columnWidth: 60,
    rowHeight: 60,
    transitionDuration: '0.2s'
  });

  var hideElems = gridElem.querySelectorAll('.hideable');
  var hideItems = layout.getItems( hideElems );
  var lastIndex = hideItems.length - 1;
  var firstItemElem = hideItems[0].element;
  var lastItemElem = hideItems[ lastIndex ].element;

  var done = assert.async();

  layout.once( 'hideComplete', function( hideCompleteItems ) {
    assert.ok( true, 'hideComplete event did fire' );
    assert.equal( hideCompleteItems.length, hideItems.length, 'event-emitted items matches layout items length' );
    assert.strictEqual( hideCompleteItems[0], hideItems[0], 'event-emitted items has same first item' );
    assert.strictEqual( hideCompleteItems[ lastIndex ], hideItems[ lastIndex ], 'event-emitted items has same last item' );
    assert.equal( firstItemElem.style.display, 'none', 'first item hidden' );
    assert.equal( lastItemElem.style.display, 'none', 'last item hidden' );
    assert.equal( firstItemElem.style.opacity, '', 'first item opacity not set' );
    assert.equal( lastItemElem.style.opacity, '', 'last item opacity not set' );
    setTimeout( nextReveal );
  });

  layout.hide( hideItems );

  // --------------------------  -------------------------- //

  function nextReveal() {
    layout.once( 'revealComplete', function( revealCompleteItems ) {
      assert.ok( true, 'revealComplete event did fire' );
      assert.equal( revealCompleteItems.length, hideItems.length, 'event-emitted items matches layout items length' );
      assert.strictEqual( revealCompleteItems[0], hideItems[0], 'event-emitted items has same first item' );
      assert.strictEqual( revealCompleteItems[ lastIndex ], hideItems[ lastIndex ], 'event-emitted items has same last item' );
      assert.equal( firstItemElem.style.display, '', 'first item no display' );
      assert.equal( lastItemElem.style.display, '', 'last item no display' );
      assert.equal( firstItemElem.style.opacity, '', 'first item opacity not set' );
      assert.equal( lastItemElem.style.opacity, '', 'last item opacity not set' );
      setTimeout( nextHideNoTransition );
    });

    layout.reveal( hideItems );
  }

  // --------------------------  -------------------------- //
  
  function nextHideNoTransition() {
    layout.once( 'hideComplete', function( hideCompleteItems ) {
      assert.ok( true, 'hideComplete event did fire' );
      assert.equal( hideCompleteItems.length, hideItems.length, 'event-emitted items matches layout items length' );
      assert.strictEqual( hideCompleteItems[0], hideItems[0], 'event-emitted items has same first item' );
      assert.strictEqual( hideCompleteItems[ lastIndex ], hideItems[ lastIndex ], 'event-emitted items has same last item' );
      assert.equal( firstItemElem.style.display, 'none', 'first item hidden' );
      assert.equal( lastItemElem.style.display, 'none', 'last item hidden' );
      assert.equal( firstItemElem.style.opacity, '', 'first item opacity not set' );
      assert.equal( lastItemElem.style.opacity, '', 'last item opacity not set' );
      setTimeout( nextRevealNoTransition );
      // start();
    });

    layout.transitionDuration = 0;
    layout.hide( hideItems );
  }

  // --------------------------  -------------------------- //

  function nextRevealNoTransition() {
    layout.once( 'revealComplete', function( revealCompleteItems ) {
      assert.ok( true, 'revealComplete event did fire' );
      assert.equal( revealCompleteItems.length, hideItems.length, 'event-emitted items matches layout items length' );
      assert.strictEqual( revealCompleteItems[0], hideItems[0], 'event-emitted items has same first item' );
      assert.strictEqual( revealCompleteItems[ lastIndex ], hideItems[ lastIndex ], 'event-emitted items has same last item' );
      assert.equal( firstItemElem.style.display, '', 'first item no display' );
      assert.equal( lastItemElem.style.display, '', 'last item no display' );
      assert.equal( firstItemElem.style.opacity, '', 'first item opacity not set' );
      assert.equal( lastItemElem.style.opacity, '', 'last item opacity not set' );
      setTimeout( nextHideNone );
      // start();
    });

    layout.reveal( hideItems );
  }

  function nextHideNone() {
    var emptyArray = [];
    layout.once( 'hideComplete', function( hideCompleteItems ) {
      assert.ok( true, 'hideComplete event did fire with no items' );
      assert.equal( hideCompleteItems, emptyArray, 'returns same object passed in' );
      setTimeout( nextRevealNone );
      // start();
    });
  
    layout.hide( emptyArray );
  }

  function nextRevealNone() {
    var emptyArray = [];
    layout.once( 'revealComplete', function( revealCompleteItems ) {
      assert.ok( true, 'revealComplete event did fire with no items' );
      assert.equal( revealCompleteItems, emptyArray, 'returns same object passed in' );
      setTimeout( nextHideItemElements );
      // start();
    });
  
    layout.reveal( emptyArray );
  }

  // --------------------------  -------------------------- //

  function nextHideItemElements() {
    layout.once( 'hideComplete', function( hideCompleteItems ) {
      assert.ok( true, 'hideComplete event did fire after hideItemElements' );
      assert.equal( hideCompleteItems.length, hideItems.length, 'event-emitted items matches layout items length' );
      assert.strictEqual( hideCompleteItems[0], hideItems[0], 'event-emitted items has same first item' );
      assert.strictEqual( hideCompleteItems[ lastIndex ], hideItems[ lastIndex ], 'event-emitted items has same last item' );
      assert.equal( firstItemElem.style.display, 'none', 'first item hidden' );
      assert.equal( lastItemElem.style.display, 'none', 'last item hidden' );
      assert.equal( firstItemElem.style.opacity, '', 'first item opacity not set' );
      assert.equal( lastItemElem.style.opacity, '', 'last item opacity not set' );
      setTimeout( nextRevealItemElements );
      // start();
    });

    layout.hideItemElements( hideElems );
  }

  function nextRevealItemElements() {
    layout.once( 'revealComplete', function( revealCompleteItems ) {
      assert.ok( true, 'revealComplete event did fire after revealItemElements' );
      assert.equal( revealCompleteItems.length, hideItems.length, 'event-emitted items matches layout items length' );
      assert.strictEqual( revealCompleteItems[0], hideItems[0], 'event-emitted items has same first item' );
      assert.strictEqual( revealCompleteItems[ lastIndex ], hideItems[ lastIndex ], 'event-emitted items has same last item' );
      assert.equal( firstItemElem.style.display, '', 'first item no display' );
      assert.equal( lastItemElem.style.display, '', 'last item no display' );
      assert.equal( firstItemElem.style.opacity, '', 'first item opacity not set' );
      assert.equal( lastItemElem.style.opacity, '', 'last item opacity not set' );
      // setTimeout( nextHideNoTransition );
      done();
    });

    layout.revealItemElements( hideElems );
  }

});
