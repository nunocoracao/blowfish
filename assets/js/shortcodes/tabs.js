function initTabs() {
  tabClickHandler = (event) => {
    const button = event.target.closest(".tab__button");
    if (!button) return;

    const container = button.closest(".tab__container");
    const tabIndex = parseInt(button.dataset.tabIndex);
    activateTab(container, tabIndex);
  };

  document.addEventListener("click", tabClickHandler);
}

function activateTab(container, activeIndex) {
  const buttons = container.querySelectorAll(".tab__button");
  const panels = container.querySelectorAll(".tab__panel");

  buttons.forEach((btn, index) => {
    if (index === activeIndex) {
      btn.classList.add("tab--active");
      btn.setAttribute("aria-selected", "true");
    } else {
      btn.classList.remove("tab--active");
      btn.setAttribute("aria-selected", "false");
    }
  });

  panels.forEach((panel, index) => {
    if (index === activeIndex) {
      panel.classList.add("tab--active");
    } else {
      panel.classList.remove("tab--active");
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTabs);
} else {
  initTabs();
}
