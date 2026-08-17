(function () {
  var script = document.currentScript;
  var target = document.getElementById(script.getAttribute("data-hero-id"));
  if (!target) return;
  var distance = parseInt(script.getAttribute("data-fade-distance"), 10) || 500;
  var ticking = false;
  function update() {
    ticking = false;
    var opacity = Math.max(0, 1 - window.scrollY / distance);
    target.style.opacity = opacity;
    target.style.visibility = opacity === 0 ? "hidden" : "visible";
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
