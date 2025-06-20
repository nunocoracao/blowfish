function _getDefaultPackeryOptions() {
  return {
    percentPosition: true,
    gutter: 5,
    resize: true,
  };
}

function _getPackeryOptions(nodeGallery) {
  const defaults = _getDefaultPackeryOptions();
  const {
    packeryGutter,
    packeryPercentPosition,
    packeryResize,
  } = nodeGallery.dataset;

  return {
    percentPosition:
      packeryPercentPosition !== undefined
        ? packeryPercentPosition === "true"
        : defaults.percentPosition,
    gutter:
      packeryGutter !== undefined ? parseInt(packeryGutter, 10) : defaults.gutter,
    resize:
      packeryResize !== undefined ? packeryResize === "true" : defaults.resize,
  };
}

(function init() {
  $(window).on("load", function () {
    let packeries = [];
    let nodeGalleries = document.querySelectorAll(".gallery");

    nodeGalleries.forEach((nodeGallery) => {
      let packery = new Packery(nodeGallery, _getPackeryOptions(nodeGallery));
      packeries.push(packery);
    });
    console.groupEnd();
  });
})();
