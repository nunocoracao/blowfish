var menuButton = document.getElementById("menu-button");
var menuCloseButton = document.getElementById("menu-close-button");

var menuOpen = false;

menuButton.addEventListener("click", function () {
  if (!menuOpen) {
    menuOpen = true;
    var menuWrapper = document.getElementById("menu-wrapper");
    document.body.style.overflowY = "hidden";
    menuButton.style.visibility = "hidden";
    menuWrapper.style.visibility = "visible";
    menuWrapper.style.opacity = "1";
  }
});

menuCloseButton.addEventListener("click", function (e) {
  if (menuOpen) {
    menuOpen = false;
    var menuWrapper = document.getElementById("menu-wrapper");
    document.body.style.overflowY = "auto";
    menuButton.style.visibility = "visible";
    menuWrapper.style.visibility = "hidden";
    menuWrapper.style.opacity = "0";
    e.stopPropagation();
  }
});