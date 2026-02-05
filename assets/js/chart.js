function css(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name);
}

Chart.defaults.font.size = 14;
Chart.defaults.backgroundColor = css("--clr-primary-300");
Chart.defaults.elements.point.borderColor = css("--clr-primary-400");
Chart.defaults.elements.bar.borderColor = css("--clr-primary-500");
Chart.defaults.elements.bar.borderWidth = 1;
Chart.defaults.elements.line.borderColor = css("--clr-primary-400");
Chart.defaults.elements.arc.backgroundColor = css("--clr-primary-200");
Chart.defaults.elements.arc.borderColor = css("--clr-primary-500");
Chart.defaults.elements.arc.borderWidth = 1;
