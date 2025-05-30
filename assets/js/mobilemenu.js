var menuButton = document.getElementById("menu-button");
var menuWrapper = document.getElementById("menu-wrapper");

var menuOpen = false;

var openMenu = function (e) {
  if (!menuOpen) {
    menuOpen = true;
    document.body.style.overflowY = "hidden";
    menuButton.style.visibility = "hidden";
    menuWrapper.style.visibility = "visible";
    menuWrapper.style.opacity = "1";
    window.onbeforeunload = function (event) {
      closeMenu();
    };
  }
};

var closeMenu = function (e) {
  if (menuOpen) {
    menuOpen = false;
    document.body.style.overflowY = "auto";
    menuButton.style.visibility = "visible";
    menuWrapper.style.visibility = "hidden";
    menuWrapper.style.opacity = "0";
    window.onbeforeunload = function (event) {};
    e.stopPropagation();
  }
};

menuButton.addEventListener("click", openMenu);
menuWrapper.addEventListener("click", closeMenu);
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-chevron').forEach(chevron => {
    const icon = chevron.querySelector('svg, .icon')
    if (icon) {
      icon.style.transition = 'transform 0.3s ease'
      icon.style.transform ||= 'rotate(0deg)'
    }
    chevron.onclick = e => {
      e.preventDefault()
      e.stopPropagation()
      const submenu = chevron.closest('li')?.querySelector('.submenu')
      if (!submenu) return
      const show = submenu.classList.toggle('hidden')
      if (icon) icon.style.transform = show ? 'rotate(-90deg)' : 'rotate(0deg)'
    }
  })
})
