const getA11ySettings = () => {
  const settings = localStorage.getItem("a11ySettings");
  return settings
    ? JSON.parse(settings)
    : {
        disableBlur: false,
        disableImages: false,
        fontSize: "default",
        underlineLinks: false,
        zenMode: false,
      };
};

const saveA11ySettings = (settings) => {
  localStorage.setItem("a11ySettings", JSON.stringify(settings));
};

const applyImageState = (imageElement, imageUrl, disableImages) => {
  if (!imageElement) return;
  if (disableImages) {
    imageElement.style.display = "none";
  } else {
    imageElement.style.display = "";
    if (imageUrl && !imageElement.getAttribute("src")) {
      imageElement.setAttribute("src", imageUrl);
    }
  }
};

const applyFontSize = (fontSizePx) => {
  const isDefaultSettings = localStorage.getItem("a11ySettings") === null;
  if (!isDefaultSettings && fontSizePx !== "default") {
    document.documentElement.style.fontSize = fontSizePx;
  }
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

const applyZenMode = (enabled) => {
  const body = document.querySelector("body");
  const isZenModeActive = body && body.classList.contains("zen-mode-enable");

  // Toggle only if current state doesn't match desired state
  if (enabled !== isZenModeActive) {
    const zenModeCheckbox = document.querySelector('[id$="zen-mode"]');
    if (zenModeCheckbox && typeof _toggleZenMode === "function") {
      _toggleZenMode(zenModeCheckbox, { scrollToHeader: false });
    }
  }
};

const applyA11ySettings = () => {
  const settings = getA11ySettings();
  document.querySelectorAll("script[data-target-id]").forEach((script) => {
    const targetId = script.getAttribute("data-target-id");
    const scrollDivisor = Number(script.getAttribute("data-scroll-divisor") || 300);
    const imageId = script.getAttribute("data-image-id");
    const imageUrl = script.getAttribute("data-image-url");
    const isMenuBlur = targetId === "menu-blur";
    setBackgroundBlur(targetId, scrollDivisor, settings.disableBlur, isMenuBlur);
    applyImageState(document.getElementById(imageId), imageUrl, settings.disableImages);
  });
  applyFontSize(settings.fontSize);
  applyUnderlineLinks(settings.underlineLinks);
  applyZenMode(settings.zenMode);
};

const updateA11ySetting = (key, value) => {
  const settings = getA11ySettings();
  settings[key] = value;
  saveA11ySettings(settings);
  applyA11ySettings();
};

const toggleA11yPanel = (prefix = "") => {
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

const initA11yPanel = (prefix = "") => {
  const settings = getA11ySettings();
  const checkboxBlur = document.getElementById(`${prefix}disable-blur`);
  const checkboxImages = document.getElementById(`${prefix}disable-images`);
  const checkboxUnderline = document.getElementById(`${prefix}underline-links`);
  const checkboxZenMode = document.getElementById(`${prefix}zen-mode`);
  const fontSizeSelect = document.getElementById(`${prefix}font-size-select`);
  const toggleButton = document.getElementById(`${prefix}a11y-toggle`);
  const closeButton = document.getElementById(`${prefix}a11y-close`);
  const overlay = document.getElementById(`${prefix}a11y-overlay`);

  if (
    !checkboxBlur ||
    !checkboxImages ||
    !checkboxUnderline ||
    !checkboxZenMode ||
    !fontSizeSelect ||
    !toggleButton ||
    !closeButton ||
    !overlay
  ) {
    console.warn(`One or more a11y elements not found for prefix: ${prefix}`);
    return;
  }

  checkboxBlur.checked = settings.disableBlur;
  checkboxImages.checked = settings.disableImages;
  checkboxUnderline.checked = settings.underlineLinks;
  checkboxZenMode.checked = settings.zenMode;
  fontSizeSelect.value = settings.fontSize;

  checkboxBlur.addEventListener("change", (e) => updateA11ySetting("disableBlur", e.target.checked));
  checkboxImages.addEventListener("change", (e) => updateA11ySetting("disableImages", e.target.checked));
  checkboxUnderline.addEventListener("change", (e) => updateA11ySetting("underlineLinks", e.target.checked));
  checkboxZenMode.addEventListener("change", (e) => {
    // Only save setting, let applyZenMode handle the toggle logic
    updateA11ySetting("zenMode", e.target.checked);
  });
  fontSizeSelect.addEventListener("change", (e) => {
    // Remove fontSize from localStorage when default is selected
    if (e.target.value === "default") {
      const settings = getA11ySettings();
      delete settings.fontSize;
      saveA11ySettings(settings);
      document.documentElement.style.fontSize = "";
    } else {
      updateA11ySetting("fontSize", e.target.value);
    }
  });

  toggleButton.addEventListener("click", () => toggleA11yPanel(prefix));
  closeButton.addEventListener("click", () => toggleA11yPanel(prefix));
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      toggleA11yPanel(prefix);
    }
  });

  document.querySelectorAll(`.ios-toggle${prefix ? `[id^="${prefix}"]` : ""}`).forEach((toggle) => {
    const checkbox = toggle.querySelector('input[type="checkbox"]');
    if (!checkbox) return;
    const newToggle = toggle.cloneNode(true);
    toggle.parentNode.replaceChild(newToggle, toggle);
    newToggle.addEventListener("click", () => {
      const newCheckbox = newToggle.querySelector('input[type="checkbox"]');
      if (newCheckbox) {
        newCheckbox.checked = !newCheckbox.checked;
        newCheckbox.dispatchEvent(new Event("change", { bubbles: true }));
      }
    });
  });
};

document.querySelectorAll("script[data-target-id]").forEach((script) => {
  const imageId = script.getAttribute("data-image-id");
  const imageUrl = script.getAttribute("data-image-url");
  const settings = getA11ySettings();
  applyImageState(document.getElementById(imageId), imageUrl, settings.disableImages);
});

document.addEventListener("DOMContentLoaded", () => {
  applyA11ySettings();
  const allPanels = document.querySelectorAll('[id$="a11y-panel"]');
  allPanels.forEach((panel) => {
    const prefix = panel.id.replace("a11y-panel", "");
    initA11yPanel(prefix);
  });
});
