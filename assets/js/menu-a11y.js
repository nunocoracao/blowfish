(function () {
  "use strict";

  function syncCheckboxLabels(checkbox) {
    var expanded = checkbox.checked ? "true" : "false";
    document.querySelectorAll('label[role="button"][for="' + checkbox.id + '"]').forEach(function (label) {
      label.setAttribute("aria-expanded", expanded);
    });
  }

  function setupCheckboxLabels() {
    var seen = {};
    document.querySelectorAll('label[role="button"][for]').forEach(function (label) {
      var checkbox = document.getElementById(label.getAttribute("for"));
      if (!checkbox || checkbox.type !== "checkbox") return;

      // Enter/Space activates the label like a real button
      label.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
          event.preventDefault();
          label.click();
        }
      });

      if (!seen[checkbox.id]) {
        seen[checkbox.id] = true;
        checkbox.addEventListener("change", function () {
          syncCheckboxLabels(checkbox);
        });
        syncCheckboxLabels(checkbox);
      }
    });
  }

  function setupMobileMenuEscape() {
    var toggle = document.getElementById("mobile-menu-toggle");
    if (!toggle) return;
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.checked) {
        toggle.checked = false;
        syncCheckboxLabels(toggle);
        var opener = document.querySelector('label[role="button"][for="mobile-menu-toggle"]');
        if (opener) opener.focus();
      }
    });
  }

  function setupMobileMenuOutsideClick() {
    var toggle = document.getElementById("mobile-menu-toggle");
    var dialog = document.getElementById("mobile-menu-dialog");
    if (!toggle || !dialog) return;
    document.addEventListener("click", function (event) {
      if (!toggle.checked || event.target === toggle) return;
      if (dialog.contains(event.target)) return;
      if (event.target.closest('label[for="mobile-menu-toggle"]')) return;
      toggle.checked = false;
      syncCheckboxLabels(toggle);
    });
  }

  function setupDesktopDropdowns() {
    document.querySelectorAll(".nested-menu").forEach(function (menu) {
      var trigger = menu.querySelector("[aria-haspopup]");
      if (!trigger) return;
      var setExpanded = function (expanded) {
        trigger.setAttribute("aria-expanded", expanded ? "true" : "false");
      };
      menu.addEventListener("mouseenter", function () {
        setExpanded(true);
      });
      menu.addEventListener("mouseleave", function () {
        setExpanded(false);
      });
      menu.addEventListener("focusin", function () {
        setExpanded(true);
      });
      menu.addEventListener("focusout", function (event) {
        if (!menu.contains(event.relatedTarget)) setExpanded(false);
      });
      menu.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          if (document.activeElement && menu.contains(document.activeElement)) {
            document.activeElement.blur();
          }
          setExpanded(false);
        }
      });
    });
  }

  function init() {
    setupCheckboxLabels();
    setupMobileMenuEscape();
    setupMobileMenuOutsideClick();
    setupDesktopDropdowns();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
