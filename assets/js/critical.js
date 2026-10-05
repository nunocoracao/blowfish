// This file is restricted to critical JS only
const sitePreference = document.documentElement.getAttribute("data-default-appearance");
const userPreference = localStorage.getItem("appearance");

if ((sitePreference === "dark" && userPreference === null) || userPreference === "dark") {
  document.documentElement.classList.add("dark");
}

if (document.documentElement.getAttribute("data-auto-appearance") === "true") {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    userPreference !== "light"
  ) {
    document.documentElement.classList.add("dark");
  }
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    if (event.matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
}

{{ if .Site.Params.enableA11y }}
// A11y critical: apply visual settings before first paint
(() => {
  const critical = {
    fontSize: (size) => {
      document.documentElement.style.fontSize = size === "default" ? "" : size;
    },
    underlineLinks: (enabled) => {
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
    disableImages: (enabled) => {
      const image = document.getElementById("background-image");
      if (image) {
        image.style.display = enabled ? "none" : "";
      }
    },
  };

  window.A11yCritical = critical;

  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem("a11ySettings") || "{}");
  } catch {}

  if (saved.fontSize) critical.fontSize(saved.fontSize);
  if (saved.underlineLinks) critical.underlineLinks(true);
  if (saved.disableImages) {
    new MutationObserver(() => {
      const img = document.getElementById("background-image");
      if (img) img.style.display = "none";
    }).observe(document, { childList: true, subtree: true });
  }
})();
{{ end }}
