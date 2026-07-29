var layouts = ["background", "hero", "profile", "page", "card"];

var currentLayout = 0;

function switchHomeLayout() {
  var old = currentLayout;
  currentLayout = currentLayout == layouts.length - 1 ? 0 : currentLayout + 1;

  var oldDiv = document.getElementById(layouts[old]);
  var currentDiv = document.getElementById(layouts[currentLayout]);
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
    }),
  );
});

function initLayoutLab() {
  document.querySelectorAll("[data-layout-switcher]").forEach((lab) => {
    const buttons = lab.querySelectorAll("[data-layout-switcher-button]");
    const panels = lab.querySelectorAll("[data-layout-switcher-panel]");
    const activate = (layout) => {
      buttons.forEach((button) => {
        const active = button.dataset.layoutSwitcherButton === layout;
        button.setAttribute("aria-selected", String(active));
        button.classList.toggle("border-primary-600", active);
        button.classList.toggle("bg-primary-600", active);
        button.classList.toggle("text-white", active);
        button.classList.toggle("dark:border-primary-500", active);
        button.classList.toggle("dark:bg-primary-500", active);
      });
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.layoutSwitcherPanel !== layout;
      });
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => activate(button.dataset.layoutSwitcherButton));
    });
  });
}

window.addEventListener("DOMContentLoaded", initLayoutLab);

var list_config = ["CardViewProse", "CardViewScreenWidth", "NormalView"];

var titles = {
  CardViewProse: "card view with constrained width",
  CardViewScreenWidth: "card view with full width",
  NormalView: "standard list view",
};

var currentConfig = 0;

function switchList() {
  var old = currentConfig;
  currentConfig = currentConfig == list_config.length - 1 ? 0 : currentConfig + 1;

  var oldDiv = document.getElementById(list_config[old]);
  var currentDiv = document.getElementById(list_config[currentConfig]);
  const configCode = document.querySelectorAll("code[id=config]");

  currentDiv.style.display = "block";
  oldDiv.style.display = "none";

  configCode.forEach(function (el) {
    el.innerText = titles[list_config[currentConfig]];
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("#switch-config-button").forEach((button) =>
    button.addEventListener("click", function (e) {
      e.preventDefault();
      switchList();
    }),
  );
});
