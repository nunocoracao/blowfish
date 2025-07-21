function setBackgroundBlur(targetId, scrollDivisor = 300, disableBlur = false, isMenuBlur = false) {
  if (!targetId) {
    console.error("data-target-id is null");
    return;
  }
  const blurElement = document.getElementById(targetId);
  if (!blurElement) return;
  if (disableBlur) {
    blurElement.setAttribute("aria-hidden", "true");
    if (!isMenuBlur) {
      blurElement.style.display = "none";
      blurElement.style.opacity = "0";
    } else {
      blurElement.style.display = "";
    }
  } else {
    blurElement.style.display = "";
    blurElement.removeAttribute("aria-hidden");
  }
  const updateBlur = () => {
    if (!disableBlur || isMenuBlur) {
      const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      blurElement.style.opacity = scroll / scrollDivisor;
    }
  };
  blurElement.setAttribute("role", "presentation");
  blurElement.setAttribute("tabindex", "-1");
  window.addEventListener("scroll", updateBlur);
  updateBlur();
}

document.querySelectorAll("script[data-target-id]").forEach((script) => {
  const targetId = script.getAttribute("data-target-id");
  const scrollDivisor = Number(script.getAttribute("data-scroll-divisor") || 300);
  const isMenuBlur = targetId === "menu-blur";
  const settings = JSON.parse(localStorage.getItem("a11ySettings") || "{}");
  const disableBlur = settings.disableBlur || false;
  setBackgroundBlur(targetId, scrollDivisor, disableBlur, isMenuBlur);
});

// Prevent disableImages FOUC
// Note: I tried putting this in a11y.js but it did not work, and placing it here prevents FOUC
(() => {
  const settings = JSON.parse(localStorage.getItem("a11ySettings") || "{}");
  if (settings.disableImages) {
    document.querySelectorAll("script[data-image-id]").forEach((script) => {
      const imageId = script.getAttribute("data-image-id");
      const image = imageId && document.getElementById(imageId);
      if (image) image.style.display = "none";
    });
  }
})();
