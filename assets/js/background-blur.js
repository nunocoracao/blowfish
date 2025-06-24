(() => {
  const script = document.currentScript;
  const targetId = script?.getAttribute("data-target-id");

  window.addEventListener("scroll", () => {
    const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const backgroundBlur = document.getElementById(targetId);
    backgroundBlur.style.opacity = scroll / 300;
  });
})();
