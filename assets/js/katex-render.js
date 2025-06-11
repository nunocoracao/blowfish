document.querySelectorAll(".katex-render").forEach((element) => {
  element.addEventListener("load", () => {
    renderMathInElement(document.body);
  });
});
