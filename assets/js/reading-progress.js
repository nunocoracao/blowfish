function readingProgress() {
  const bar = document.getElementById("reading-progress");
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.width = scrollable > 0 ? `${(window.scrollY / scrollable) * 100}%` : "0%";
}

window.addEventListener("scroll", readingProgress);
window.addEventListener("load", readingProgress);
