var menuButton = document.getElementById("menu-button");
var menuCloseButton = document.getElementById("menu-close-button");
var menuWrapper = document.getElementById("menu-wrapper");

var menuOpen = false;

var openMenu = function () {
  if (!menuOpen) {
    menuOpen = true;
    document.body.style.overflowY = "hidden";
    menuButton.style.visibility = "hidden";
    menuWrapper.style.visibility = "visible";
    menuWrapper.style.opacity = "1";
    window.onbeforeunload = function () {
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
    window.onbeforeunload = function () {};
    e.stopPropagation();
  }
};

menuButton && menuButton.addEventListener("click", openMenu);
menuCloseButton && menuCloseButton.addEventListener("click", closeMenu);
