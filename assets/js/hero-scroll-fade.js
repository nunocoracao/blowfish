(function () {
  var script = document.currentScript;
  var target = document.getElementById(script.getAttribute("data-hero-id"));
  if (!target) return;
  var distance = parseInt(script.getAttribute("data-fade-distance"), 10) || 500;
  var ticking = false;
  var last = -1;
  function update() {
    ticking = false;
    var opacity = Math.max(0, 1 - window.scrollY / distance);
    if (opacity === last) return;
    last = opacity;
    target.style.opacity = opacity;
  }
  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
  update();
})();
