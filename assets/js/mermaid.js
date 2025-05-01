function css(name) {
  return "rgb(" + getComputedStyle(document.documentElement).getPropertyValue(name) + ")";
}

document.addEventListener("DOMContentLoaded", () => {
  const mermaidDivs = document.querySelectorAll("div.mermaid");

  for (const div of mermaidDivs) {
    const preElement = div.querySelector("pre");
    if (preElement) {
      div.textContent = preElement.textContent;
    }
  }
});

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
