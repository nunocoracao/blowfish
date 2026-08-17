(function () {
  "use strict";

  function initLayoutSwitcher() {
    document.querySelectorAll("[data-layout-switcher]").forEach(function (lab) {
      var buttons = Array.prototype.slice.call(lab.querySelectorAll("[data-layout-switcher-button]"));
      var panels = lab.querySelectorAll("[data-layout-switcher-panel]");

      var activate = function (layout, focusTab) {
        buttons.forEach(function (button) {
          var active = button.dataset.layoutSwitcherButton === layout;
          button.setAttribute("aria-selected", String(active));
          button.setAttribute("tabindex", active ? "0" : "-1");
          button.classList.toggle("border-primary-600", active);
          button.classList.toggle("bg-primary-600", active);
          button.classList.toggle("text-white", active);
          button.classList.toggle("dark:border-primary-500", active);
          button.classList.toggle("dark:bg-primary-500", active);
          if (active && focusTab) button.focus();
        });
        panels.forEach(function (panel) {
          panel.hidden = panel.dataset.layoutSwitcherPanel !== layout;
        });
      };

      buttons.forEach(function (button, index) {
        button.addEventListener("click", function () {
          activate(button.dataset.layoutSwitcherButton, false);
        });
        button.addEventListener("keydown", function (event) {
          var target = null;
          if (event.key === "ArrowRight") {
            target = buttons[(index + 1) % buttons.length];
          } else if (event.key === "ArrowLeft") {
            target = buttons[(index - 1 + buttons.length) % buttons.length];
          } else if (event.key === "Home") {
            target = buttons[0];
          } else if (event.key === "End") {
            target = buttons[buttons.length - 1];
          }
          if (target) {
            event.preventDefault();
            activate(target.dataset.layoutSwitcherButton, true);
          }
        });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLayoutSwitcher);
  } else {
    initLayoutSwitcher();
  }
})();
