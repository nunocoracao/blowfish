(() => {
  const scripts = document.querySelectorAll("script[data-target-id]");

  const getA11ySettings = () => {
    const settings = localStorage.getItem("a11ySettings");
    return settings
      ? JSON.parse(settings)
      : {
          disableBlur: false,
          disableImages: false,
          fontSize: "16px",
          underlineLinks: false,
        };
  };

  const saveA11ySettings = (settings) => {
    localStorage.setItem("a11ySettings", JSON.stringify(settings));
  };

  const getScrollOpacity = (scrollDivisor) => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    return scrollY / scrollDivisor;
  };

  const applyBlurState = (blurElement, scrollDivisor, targetId, imageElement, imageUrl) => {
    if (!blurElement) return;
    const settings = getA11ySettings();
    const isMenuBlur = targetId === "menu-blur";

    if (settings.disableBlur) {
      blurElement.setAttribute("aria-hidden", "true");
      if (!isMenuBlur) {
        blurElement.style.display = "none";
        blurElement.style.opacity = "0";
      } else {
        blurElement.style.display = "";
        blurElement.style.opacity = getScrollOpacity(scrollDivisor);
      }
    } else {
      blurElement.style.display = "";
      blurElement.style.opacity = getScrollOpacity(scrollDivisor);
      blurElement.removeAttribute("aria-hidden");
    }

    if (imageElement) {
      if (settings.disableImages) {
        imageElement.style.display = "none";
      } else {
        imageElement.style.display = "";
        if (imageUrl && !imageElement.getAttribute("src")) {
          imageElement.setAttribute("src", imageUrl);
        }
      }
    }
  };

  const applyFontSize = (fontSizePx) => {
    document.documentElement.style.fontSize = fontSizePx;
  };

  const applyUnderlineLinks = (enabled) => {
    let styleElement = document.getElementById("a11y-underline-links");
    if (enabled) {
      if (!styleElement) {
        styleElement = document.createElement("style");
        styleElement.id = "a11y-underline-links";
        styleElement.textContent = "a { text-decoration: underline !important; }";
        document.head.appendChild(styleElement);
      }
    } else {
      if (styleElement) {
        styleElement.remove();
      }
    }
  };

  const applyA11ySettings = () => {
    const settings = getA11ySettings();

    scripts.forEach((script) => {
      const targetId = script.getAttribute("data-target-id");
      const scrollDivisor = Number(script.getAttribute("data-scroll-divisor") || 300);
      const imageId = script.getAttribute("data-image-id");
      const imageUrl = script.getAttribute("data-image-url");

      const blurElement = document.getElementById(targetId);
      const imageElement = imageId ? document.getElementById(imageId) : null;
      applyBlurState(blurElement, scrollDivisor, targetId, imageElement, imageUrl);
    });

    applyFontSize(settings.fontSize);
    applyUnderlineLinks(settings.underlineLinks);
  };

  const updateA11ySetting = (key, value) => {
    const settings = getA11ySettings();
    settings[key] = value;
    saveA11ySettings(settings);
    applyA11ySettings();
  };

  window.toggleA11yPanel = function (prefix = "") {
    const panel = document.getElementById(`${prefix}a11y-panel`);
    const overlay = document.getElementById(`${prefix}a11y-overlay`);
    const button = document.getElementById(`${prefix}a11y-toggle`);

    if (!panel || !overlay || !button) return;

    if (overlay.classList.contains("hidden")) {
      overlay.classList.remove("hidden");
      panel.classList.remove("hidden");
      button.setAttribute("aria-pressed", "true");
      button.setAttribute("aria-expanded", "true");
    } else {
      overlay.classList.add("hidden");
      panel.classList.add("hidden");
      button.setAttribute("aria-pressed", "false");
      button.setAttribute("aria-expanded", "false");
    }
  };

  window.initA11yPanel = function (prefix = "") {
    const settings = getA11ySettings();

    const checkboxBlur = document.getElementById(`${prefix}disable-blur`);
    const checkboxImages = document.getElementById(`${prefix}disable-images`);
    const checkboxUnderline = document.getElementById(`${prefix}underline-links`);
    const fontSizeSelect = document.getElementById(`${prefix}font-size-select`);

    if (!checkboxBlur || !checkboxImages || !checkboxUnderline || !fontSizeSelect) return;

    checkboxBlur.checked = settings.disableBlur;
    checkboxImages.checked = settings.disableImages;
    fontSizeSelect.value = settings.fontSize;
    checkboxUnderline.checked = settings.underlineLinks;

    checkboxBlur.addEventListener("change", (e) => {
      updateA11ySetting("disableBlur", e.target.checked);
    });

    checkboxImages.addEventListener("change", (e) => {
      updateA11ySetting("disableImages", e.target.checked);
    });

    fontSizeSelect.addEventListener("change", (e) => {
      updateA11ySetting("fontSize", e.target.value);
    });

    checkboxUnderline.addEventListener("change", (e) => {
      updateA11ySetting("underlineLinks", e.target.checked);
    });

    document.querySelectorAll(".ios-toggle").forEach((toggle) => {
      const checkbox = toggle.querySelector('input[type="checkbox"]');
      if (!checkbox || !checkbox.id.startsWith(prefix)) return;
      toggle.addEventListener("click", () => {
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event("change"));
      });
    });

    const overlay = document.getElementById(`${prefix}a11y-overlay`);
    const button = document.getElementById(`${prefix}a11y-toggle`);
    if (overlay && button) {
      document.addEventListener("click", (e) => {
        if (e.target === overlay) {
          overlay.classList.add("hidden");
          const panel = document.getElementById(`${prefix}a11y-panel`);
          if (panel) panel.classList.add("hidden");
          button.setAttribute("aria-pressed", "false");
          button.setAttribute("aria-expanded", "false");
        }
      });
    }
  };

  scripts.forEach((script) => {
    const targetId = script.getAttribute("data-target-id");
    const scrollDivisor = Number(script.getAttribute("data-scroll-divisor") || 300);
    const imageId = script.getAttribute("data-image-id");
    const imageUrl = script.getAttribute("data-image-url");

    const blurElement = document.getElementById(targetId);
    const imageElement = imageId ? document.getElementById(imageId) : null;

    if (blurElement) {
      blurElement.setAttribute("role", "presentation");
      blurElement.setAttribute("tabindex", "-1");
      applyBlurState(blurElement, scrollDivisor, targetId, imageElement, imageUrl);

      window.addEventListener("scroll", () => {
        const settings = getA11ySettings();
        if (!settings.disableBlur || targetId === "menu-blur") {
          blurElement.style.opacity = getScrollOpacity(scrollDivisor);
        }
      });
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    applyA11ySettings();

    const allPanels = document.querySelectorAll('[id$="a11y-panel"]');
    allPanels.forEach((panel) => {
      const prefix = panel.id.replace("a11y-panel", "");
      window.initA11yPanel(prefix);
    });
  });
})();
