window.addEventListener("DOMContentLoaded", (event) => {
  const switcher = document.getElementById("appearance-switcher");
  const switcherMobile = document.getElementById("appearance-switcher-mobile");

  // Load the i18n translations for the tooltips
  const darkLabel = {{ i18n "footer.dark_appearance" | jsonify }};
  const lightLabel = {{ i18n "footer.light_appearance" | jsonify }};

  updateMeta();
  this.updateLogo?.(getTargetAppearance());

  // Helper to update the tooltip depending on the current mode
  const updateTooltip = (targetAppearance) => {
    // If target is dark, the next action will be switching to light
    const label = targetAppearance === "dark" ? lightLabel : darkLabel;
    if (switcher) {
      switcher.setAttribute("aria-label", label);
      switcher.setAttribute("title", label);
    }
    if (switcherMobile) {
      switcherMobile.setAttribute("aria-label", label);
      switcherMobile.setAttribute("title", label);
    }
  };

  // Set initial tooltip on load
  updateTooltip(getTargetAppearance());

  if (switcher) {
    switcher.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      var targetAppearance = getTargetAppearance();
      localStorage.setItem(
        "appearance",
        targetAppearance
      );
      updateMeta();
      window.updateMermaidTheme?.();
      updateTooltip(targetAppearance);
      this.updateLogo?.(targetAppearance);
    });
    switcher.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      localStorage.removeItem("appearance");
    });
  }
  if (switcherMobile) {
    switcherMobile.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      var targetAppearance = getTargetAppearance();
      localStorage.setItem(
        "appearance",
        targetAppearance
      );
      updateMeta();
      window.updateMermaidTheme?.();
      updateTooltip(targetAppearance);
      this.updateLogo?.(targetAppearance);
    });
    switcherMobile.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      localStorage.removeItem("appearance");
    });
  }
});


var updateMeta = () => {
  var elem, style;
  elem = document.querySelector('body');
  style = getComputedStyle(elem);
  document.querySelector('meta[name="theme-color"]').setAttribute('content', style.backgroundColor);
}

{{ if and (.Site.Params.Logo) (.Site.Params.SecondaryLogo) }}
{{ $primaryLogo := resources.Get .Site.Params.Logo }}
{{ $secondaryLogo := resources.Get .Site.Params.SecondaryLogo }}
{{ if and ($primaryLogo) ($secondaryLogo) }}
var updateLogo = (targetAppearance) => {
  var imgElems = document.querySelectorAll("img.logo");
  var logoContainers = document.querySelectorAll("span.logo");
  
  targetLogoPath = 
    targetAppearance == "{{ .Site.Params.DefaultAppearance }}" ?
    "{{ $primaryLogo.RelPermalink }}" : "{{ $secondaryLogo.RelPermalink }}"
  for (const elem of imgElems) {
    elem.setAttribute("src", targetLogoPath)
  }

  {{ if eq $primaryLogo.MediaType.SubType "svg" }}
  targetContent = 
    targetAppearance == "{{ .Site.Params.DefaultAppearance }}" ?
    `{{ $primaryLogo.Content | safeHTML }}` : `{{ $secondaryLogo.Content | safeHTML }}`
  for (const container of logoContainers) {
    container.innerHTML = targetContent;
  }
  {{ end }}
}
{{ end }}
{{- end }}

var getTargetAppearance = () => {
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}
