function initMermaidLight() {
  mermaid.initialize({
    theme: "base",
    themeVariables: {
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
