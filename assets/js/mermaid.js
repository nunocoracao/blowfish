function css(name) {
  return "rgb(" + getComputedStyle(document.documentElement).getPropertyValue(name) + ")";
}

function initMermaidLight() {
  mermaid.initialize({
    theme: "base",
    themeVariables: {
      background: css("--color-neutral"),
      primaryColor: css("--color-primary-200"),
      secondaryColor: css("--color-secondary-200"),
      tertiaryColor: css("--color-neutral-100"),
      primaryBorderColor: css("--color-primary-400"),
      secondaryBorderColor: css("--color-secondary-400"),
      tertiaryBorderColor: css("--color-neutral-400"),
      lineColor: css("--color-neutral-600"),
      fontFamily:
        "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,noto sans,sans-serif",
      fontSize: "16px",
    },
  });
}

function initMermaidDark() {
  mermaid.initialize({
    theme: "dark",
    themeVariables: {
      fontFamily:
        "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,noto sans,sans-serif",
      fontSize: "16px",
    },
  });
}

// Mermaid dark mode support
var updateMermaidTheme = () => {
  if (typeof mermaid !== "undefined") {
    const isDark = document.documentElement.classList.contains("dark");

    const mermaids = document.querySelectorAll("pre.mermaid");
    mermaids.forEach((e) => {
      if (e.getAttribute("data-processed")) {
        // Already rendered, clean the processed attributes
        e.removeAttribute("data-processed");
        // Replace the rendered HTML with the stored text
        e.innerHTML = e.getAttribute("data-graph");
      } else {
        // First time, store the text
        e.setAttribute("data-graph", e.textContent);
      }
    });

    if (isDark) {
      initMermaidDark();
      mermaid.run();
    } else {
      initMermaidLight();
      mermaid.run();
    }
  }
};

// Initialize mermaid theme on page load
if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", updateMermaidTheme);
} else {
  updateMermaidTheme();
}
