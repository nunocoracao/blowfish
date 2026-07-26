function readingProgress() {
  const bar = document.getElementById("reading-progress");
  if (!bar) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.width = scrollable > 0 ? `${(window.scrollY / scrollable) * 100}%` : "0%";
}

window.addEventListener("scroll", readingProgress, { passive: true });
window.addEventListener("load", readingProgress);
