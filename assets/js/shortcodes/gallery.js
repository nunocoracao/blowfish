function _getDefaultPackeryOptions() {
    return {
        percentPosition: true,
        gutter: 5,
        resize: true
    };
}

(function init() {
    window.addEventListener("DOMContentLoaded", (event) => {
        console.groupCollapsed('[DEBUG] Gallery feature enable');
        let packeries = [];
        let nodeGalleries = document.querySelectorAll('.gallery');

        nodeGalleries.forEach(nodeGallery => {
            // TODO : implement a reader of Packery configuration _getPackeryOptions; for example by reading data-attribute
            let packery = new Packery(nodeGallery, _getDefaultPackeryOptions());
            packeries.push(packery);
        });

        console.log("Galleries founded and initialized with packery", packeries);
        console.groupEnd();
    });
})();