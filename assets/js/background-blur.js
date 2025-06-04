function backgroundBlur() {
  const script = document.currentScript;
  const targetId = script && script.getAttribute("data-target-id") ? script.getAttribute("data-target-id")
    : (console.error("data-target-id is null"), null);

  window.addEventListener("scroll", () => {
    const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const backgroundBlur = document.getElementById(targetId);
    backgroundBlur.style.opacity = scroll / 300;
  });
}

backgroundBlur();
