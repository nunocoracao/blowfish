document.querySelectorAll(".taxonomies-href").forEach((element) => {
  const href = element.getAttribute("data-href") ? element.getAttribute("data-href") : (console.error("data-href is null"), null);
  element.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = href;
  });
  element.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      window.location.href = href;
    }
  });
});
