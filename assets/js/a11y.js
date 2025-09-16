window.A11yPanel = (() => {
  const FEATURES = {
    disableBlur: {
      default: false,
      apply: (enabled) => {
        document.querySelectorAll("script[data-blur-id]").forEach((script) => {
          const targetId = script.getAttribute("data-blur-id");
          const scrollDivisor = Number(script.getAttribute("data-scroll-divisor") || 300);
          if (typeof setBackgroundBlur === "function") {
            setBackgroundBlur(targetId, scrollDivisor, enabled, targetId === "menu-blur");
          }
        });
      },
    },

    disableImages: {
      default: false,
      apply: (enabled) => {
        const image = document.getElementById("background-image");
        if (image) {
          image.style.display = enabled ? "none" : "";
        }
      },
    },

    fontSize: {
      default: "default",
      apply: (size) => {
        document.documentElement.style.fontSize = size === "default" ? "" : size;
      },
    },

    underlineLinks: {
      default: false,
      apply: (enabled) => {
        const existing = document.getElementById("a11y-underline-links");
        if (enabled && !existing) {
          const style = document.createElement("style");
          style.id = "a11y-underline-links";
          style.textContent = `
            a { text-decoration: underline !important; }
            .group-hover-card-title { text-decoration: underline !important; }
            .group-hover-card:hover .group-hover-card-title { text-decoration: underline !important; }`;
          document.head.appendChild(style);
        } else if (!enabled && existing) {
          existing.remove();
        }
      },
    },

    zenMode: {
      default: false,
      apply: (enabled) => {
        const isActive = document.body?.classList.contains("zen-mode-enable");
        if (enabled !== isActive) {
          const checkbox = document.querySelector('[id$="zen-mode"]');
          if (checkbox && typeof _toggleZenMode === "function") {
            _toggleZenMode(checkbox, { scrollToHeader: false });
          }
        }
      },
    },
  };

  let settings = null;

  const getSettings = () => {
    if (settings) return settings;
    const defaults = Object.fromEntries(Object.entries(FEATURES).map(([key, config]) => [key, config.default]));
    try {
      const saved = localStorage.getItem("a11ySettings");
      settings = { ...defaults, ...JSON.parse(saved || "{}") };
    } catch {
      settings = defaults;
    }
    return settings;
  };

  const updateSetting = (key, value) => {
    const current = getSettings();
    current[key] = value;
    try {
      localStorage.setItem("a11ySettings", JSON.stringify(current));
    } catch (e) {
      console.warn(`a11y.js: can not store settings: ${e}`);
    }
    FEATURES[key]?.apply(value);
  };

  const initPanel = (panelId) => {
    const prefix = panelId.replace("a11y-panel", "");
    const current = getSettings();

    Object.entries(FEATURES).forEach(([key, config]) => {
      const elementId = `${prefix}${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      const element = document.getElementById(elementId) || document.getElementById(`${elementId}-select`);

      if (element) {
        if (element.type === "checkbox") {
          element.checked = current[key];
          element.onchange = (e) => updateSetting(key, e.target.checked);
        } else if (element.tagName === "SELECT") {
          element.value = current[key];
          element.onchange = (e) => updateSetting(key, e.target.value);
        }
      }
    });

    const togglePanel = () => {
      const panel = document.getElementById(panelId);
      const overlay = document.getElementById(`${prefix}a11y-overlay`);
      const toggle = document.getElementById(`${prefix}a11y-toggle`);

      if (!panel || !overlay) return;

      const isHidden = overlay.classList.contains("hidden");
      overlay.classList.toggle("hidden");
      panel.classList.toggle("hidden");

      if (toggle) {
        toggle.setAttribute("aria-pressed", String(isHidden));
        toggle.setAttribute("aria-expanded", String(isHidden));
      }
    };

    const toggle = document.getElementById(`${prefix}a11y-toggle`);
    const close = document.getElementById(`${prefix}a11y-close`);
    const overlay = document.getElementById(`${prefix}a11y-overlay`);

    if (toggle) toggle.onclick = togglePanel;
    if (close) close.onclick = togglePanel;
    if (overlay) overlay.onclick = (e) => e.target === overlay && togglePanel();
  };

  const applyAll = () => {
    const current = getSettings();
    Object.entries(current).forEach(([key, value]) => {
      FEATURES[key]?.apply(value);
    });
  };

  const init = () => {
    applyAll();
    document.querySelectorAll('[id$="a11y-panel"]').forEach((panel) => {
      initPanel(panel.id);
    });
  };

  if (getSettings().disableImages) {
    new MutationObserver(() => {
      const img = document.getElementById("background-image");
      if (img) img.style.display = "none";
    }).observe(document, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  return {
    getSettings,
    updateSetting,
    addFeature: (name, config) => {
      FEATURES[name] = config;
      FEATURES[name].apply(getSettings()[name] || config.default);
    },
  };
})();
