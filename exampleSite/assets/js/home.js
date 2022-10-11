

var layouts = [
  "hero",
  "profile",
  "card",
  "page"
]

var currentLayout = 0

function switchHomeLayout() {

  //document.getElementById(

  var old = currentLayout
  currentLayout = currentLayout == layouts.length - 1 ? 0 : currentLayout + 1

  var oldDiv = document.getElementById(layouts[old])
  var currentDiv = document.getElementById(layouts[currentLayout])
  const layoutCode = document.querySelectorAll("code[id=layout]");

  currentDiv.style.display = "block";
  oldDiv.style.display = "none";
  layoutCode.forEach(function (el) {
    el.innerText = layouts[currentLayout];
  });

}

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("#switch-layout-button").forEach((button) =>
    button.addEventListener("click", function (e) {
      e.preventDefault();
      switchHomeLayout();
    })
  );
});
