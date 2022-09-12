function switchHomeLayout() {
  const pageDiv = document.getElementById("page");
  const profileDiv = document.getElementById("profile");
  const layoutCode = document.querySelectorAll("code[id=layout]");
  if (profileDiv.style.display === "none") {
    profileDiv.style.display = "block";
    pageDiv.style.display = "none";
    layoutCode.forEach(function (el) {
      el.innerText = "profile";
    });
  } else {
    profileDiv.style.display = "none";
    pageDiv.style.display = "block";
    layoutCode.forEach(function (el) {
      el.innerText = "page";
    });
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("#switch-layout-button").forEach((button) =>
    button.addEventListener("click", function (e) {
      e.preventDefault();
      switchHomeLayout();
    })
  );
});
