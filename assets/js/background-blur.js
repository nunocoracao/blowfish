(() => {
  const scripts = document.querySelectorAll('script[data-target-id]');
  
  const isA11yMode = () => {
    return localStorage.getItem("a11yMode") === "true";
  };

  const getScrollOpacity = (scrollDivisor) => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    return scrollY / scrollDivisor;
  };

  const applyBlurState = (blurElement, scrollDivisor, targetId, imageElement, imageUrl) => {
    if (!blurElement) return;
    const isMenuBlur = targetId === "menu-blur";

    if (isA11yMode()) {
      blurElement.setAttribute("aria-hidden", "true");
      if (!isMenuBlur) {
        blurElement.style.display = "none";
        blurElement.style.opacity = "0";
      } else {
        blurElement.style.display = "";
        blurElement.style.opacity = getScrollOpacity(scrollDivisor);
      }
      // Hide image in a11y mode
      if (imageElement) {
        imageElement.style.display = "none";
      }
    } else {
      blurElement.style.display = "";
      blurElement.style.opacity = getScrollOpacity(scrollDivisor);
      blurElement.removeAttribute("aria-hidden");
      // Show image in normal mode
      if (imageElement) {
        imageElement.style.display = "";
        // Re-apply image source if it was removed
        if (imageUrl && !imageElement.getAttribute('src')) {
          imageElement.setAttribute('src', imageUrl);
        }
      }
    }
  };

  scripts.forEach(script => {
    const targetId = script.getAttribute("data-target-id");
    const scrollDivisor = Number(script.getAttribute("data-scroll-divisor") || 300);
    const imageId = script.getAttribute("data-image-id");
    const imageUrl = script.getAttribute("data-image-url"); // Get image URL from data attribute

    const blurElement = document.getElementById(targetId);
    const imageElement = imageId ? document.getElementById(imageId) : null;

    if (blurElement) {
      blurElement.setAttribute("role", "presentation");
      blurElement.setAttribute("tabindex", "-1");
      applyBlurState(blurElement, scrollDivisor, targetId, imageElement, imageUrl);

      window.addEventListener("scroll", () => {
        if (!isA11yMode() || targetId === "menu-blur") {
          blurElement.style.opacity = getScrollOpacity(scrollDivisor);
        }
      });
    }
  });

  window.toggleA11yMode = function() {
    localStorage.setItem("a11yMode", String(!isA11yMode()));
    scripts.forEach(script => {
      const targetId = script.getAttribute("data-target-id");
      const scrollDivisor = Number(script.getAttribute("data-scroll-divisor") || 300);
      const imageId = script.getAttribute("data-image-id");
      const imageUrl = script.getAttribute("data-image-url"); // Get image URL from data attribute

      const blurElement = document.getElementById(targetId);
      const imageElement = imageId ? document.getElementById(imageId) : null;
      applyBlurState(blurElement, scrollDivisor, targetId, imageElement, imageUrl);
    });
  };
})();
