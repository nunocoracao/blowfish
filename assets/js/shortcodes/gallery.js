function _getDefaultPackeryOptions() {
  return {
    percentPosition: true,
    gutter: 5,
    resize: true,
  };
}

(function init() {
  $(window).on("load", function () {
    let packeries = [];
    let nodeGalleries = document.querySelectorAll(".gallery");

    nodeGalleries.forEach((nodeGallery) => {
      // TODO : implement a reader of Packery configuration _getPackeryOptions; for example by reading data-attribute
      let packery = new Packery(nodeGallery, _getDefaultPackeryOptions());
      packeries.push(packery);
    });
    console.groupEnd();
  });
})();
