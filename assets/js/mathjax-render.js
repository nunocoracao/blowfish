window.MathJax = {
  tex: {
    /* start/end delimiter pairs for in-line math */
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    /* start/end delimiter pairs for display math */
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    options: {
      skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
    }
  },
  svg: {
    fontCache: "global",
  },
  startup: {
    ready: () => {
      console.log("MathJax is loaded, but not yet initialized");
      MathJax.startup.defaultReady();
      console.log("MathJax is initialized, and the initial typeset is queued");
    },
  },
};

(function () {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
  script.async = true;
  document.head.appendChild(script);
})();
