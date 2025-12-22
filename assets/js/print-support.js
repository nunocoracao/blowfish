(function() {
  'use strict';
  var closedDetails = [];
  window.addEventListener('beforeprint', function() {
    var allDetails = document.querySelectorAll('details:not([open])');
    for (var i = 0; i < allDetails.length; i++) {
      allDetails[i].open = true;
      closedDetails.push(allDetails[i]);
    }
  });
  window.addEventListener('afterprint', function() {
    for (var i = 0; i < closedDetails.length; i++) {
      closedDetails[i].open = false;
    }
    closedDetails = [];
  });
})();
