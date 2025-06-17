function setBackgroundBlur() {
  const scriptElement = document.currentScript;
  const targetId =
    scriptElement && scriptElement.getAttribute("data-target-id")
      ? scriptElement.getAttribute("data-target-id")
      : (console.error("data-target-id is null"), null);

  window.addEventListener("scroll", () => {
    const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const backgroundBlur = document.getElementById(targetId);
    backgroundBlur.style.opacity = scroll / 300;
  });
}

setBackgroundBlur();
