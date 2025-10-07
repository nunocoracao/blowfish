function scrollToTop() {
  const scrollToTop = document.getElementById("scroll-to-top");
  if (window.scrollY > window.innerHeight * 0.5) {
    scrollToTop.classList.remove("translate-y-4", "opacity-0");
    scrollToTop.classList.add("translate-y-0", "opacity-100");
  } else {
    scrollToTop.classList.remove("translate-y-0", "opacity-100");
    scrollToTop.classList.add("translate-y-4", "opacity-0");
  }
}

window.addEventListener("scroll", scrollToTop);
window.addEventListener("load", scrollToTop);
