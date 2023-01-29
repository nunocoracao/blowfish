QUnit.test( 'container size', function( assert ) {

  // test layout that just sets size
  var Sizer = Outlayer.create( 'sizer', {
    width: 220,
    height: 120
  });

  Sizer.prototype._getContainerSize = function() {
    return {
      width: this.options.width,
      height: this.options.height
    };
  };

  var elem = document.querySelector('#container-size');

  var layout = new Sizer( elem );

  function checkSize( width, height ) {
    assert.equal( elem.style.width, width + 'px', 'width = ' + width );
    assert.equal( elem.style.height, height + 'px', 'height = ' + height );
  }

  checkSize( 220, 120 );

  // disable resizing
  layout.options.resizeContainer = false;
  layout.options.width = 180;
  layout.options.height = 230;
  layout.layout();
  checkSize( 220, 120 );
  layout.options.resizeContainer = true;
  layout.options.width = 220;
  layout.options.height = 120;

  if ( layout.size.isBorderBox ) {
    elem.style.padding = '10px 20px 30px 40px';
    layout.layout();
    checkSize( 280, 160 );

    elem.style.borderStyle = 'solid';
    elem.style.borderWidth = '4px 3px 2px 1px';

    layout.layout();
    checkSize( 284, 166 );
  }

});
