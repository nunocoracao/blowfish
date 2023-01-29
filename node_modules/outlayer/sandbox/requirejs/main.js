requirejs.config({
  baseUrl: '../../bower_components'
  // OR
  // paths: {
  //   'ev-emitter': 'bower_components/ev-emitter',
  //   'get-size': 'bower_components/get-size',
  //   'matches-selector': 'bower_components/matches-selector'
  // }
});

requirejs( [ '../sandbox/cells-by-row' ], function( CellsByRow ) {
  new CellsByRow( document.querySelector('#basic') );
});
