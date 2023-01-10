function header_toggle_nested_menu(element) {
  if (!element) {
    throw new Error("Could not find button")
  }
  let parent_element = element.parentElement;
  if(!parent_element) {
    throw new Error("Could not get parent element from button")
  }
  let nested_menu = parent_element.querySelector(".header-nested-menu")
  nested_menu.classList.toggle('hidden');
}
