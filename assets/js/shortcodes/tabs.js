function initTabs() {
  tabClickHandler = (event) => {
    const button = event.target.closest(".tab__button");
    if (!button) return;

    const container = button.closest(".tab__container");
    const tabIndex = parseInt(button.dataset.tabIndex);
    const tabLabel = button.dataset.tabLabel;
    const group = container.dataset.tabGroup;

    if (group) {
      const allGroupContainers = document.querySelectorAll(`.tab__container[data-tab-group="${group}"]`);

      allGroupContainers.forEach((groupContainer) => {
        const targetButton = Array.from(groupContainer.querySelectorAll(".tab__button")).find(
          (btn) => btn.dataset.tabLabel === tabLabel,
        );

        if (targetButton) {
          const targetIndex = parseInt(targetButton.dataset.tabIndex);
          activateTab(groupContainer, targetIndex);
        }
      });
    } else {
      activateTab(container, tabIndex);
    }
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
