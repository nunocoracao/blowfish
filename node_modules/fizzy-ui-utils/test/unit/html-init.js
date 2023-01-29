QUnit.test( 'htmlInit', function( assert ) {

  fizzyUIUtils.htmlInit( NiceGreeter, 'niceGreeter' );

  var done = assert.async();
  fizzyUIUtils.docReady( function() {
    var greeterElems = document.querySelectorAll('[data-greeter-expected]');
    for ( var i=0; i < greeterElems.length; i++ ) {
      var greeterElem = greeterElems[i];
      var attr = greeterElem.getAttribute('data-greeter-expected');
      assert.equal( greeterElem.textContent, attr, 'textContent matches options' );
    }
    done();
  });

});

function NiceGreeter( elem, options ) {
  this.element = elem;
  var greeting = options && options.greeting || 'hello';
  var recipient = options && options.recipient || 'world';
  this.element.textContent = greeting + ' ' + recipient;
}
