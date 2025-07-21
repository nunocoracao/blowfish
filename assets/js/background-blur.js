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

  const toggleA11yPanel = () => {
    const panel = document.getElementById("a11y-panel");
    const overlay = document.getElementById("a11y-overlay");
    const button = document.getElementById("a11y-toggle");

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

  const initA11yPanel = () => {
    const settings = getA11ySettings();

    document.getElementById("disable-blur").checked = settings.disableBlur;
    document.getElementById("disable-images").checked = settings.disableImages;

    const fontSizeSelect = document.getElementById("font-size-select");
    fontSizeSelect.value = settings.fontSize;

    document.getElementById("underline-links").checked = settings.underlineLinks;

    document.getElementById("disable-blur").addEventListener("change", (e) => {
      updateA11ySetting("disableBlur", e.target.checked);
    });

    document.getElementById("disable-images").addEventListener("change", (e) => {
      updateA11ySetting("disableImages", e.target.checked);
    });

    document.getElementById("font-size-select").addEventListener("change", (e) => {
      updateA11ySetting("fontSize", e.target.value);
    });

    document.getElementById("underline-links").addEventListener("change", (e) => {
      updateA11ySetting("underlineLinks", e.target.checked);
    });

    document.querySelectorAll(".ios-toggle").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const checkbox = toggle.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event("change"));
      });
    });

    document.addEventListener("click", (e) => {
      const overlay = document.getElementById("a11y-overlay");
      const button = document.getElementById("a11y-toggle");
      if (e.target === overlay) {
        overlay.classList.add("hidden");
        document.getElementById("a11y-panel").classList.add("hidden");
        button.setAttribute("aria-pressed", "false");
        button.setAttribute("aria-expanded", "false");
      }
    });
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

  window.toggleA11yPanel = toggleA11yPanel;

  document.addEventListener("DOMContentLoaded", () => {
    applyA11ySettings();
    if (document.getElementById("a11y-panel")) {
      initA11yPanel();
    }
  });
})();
