(() => {
  const script = document.currentScript;
  const mapId = script?.getAttribute("data-map-id");

  const mapCenterX = script?.getAttribute("data-map-center-x");
  const mapCenterY = script?.getAttribute("data-map-center-y");
  const defaultZoom = script?.getAttribute("data-default-zoom");

  const tileBaseURL = script?.getAttribute("data-tile-base-url");
  const minZoom = script?.getAttribute("data-min-zoom");
  const maxZoom = script?.getAttribute("data-max-zoom");
  const copyrightURL = script?.getAttribute("data-copyright-url");
  const copyrightName = script?.getAttribute("data-copyright-name");

  const markerIconURL = script?.getAttribute("data-marker-icon-url");
  const markerIconRetinaURL = script?.getAttribute("data-marker-icon-retina-url");
  const markerIconShadowURL = script?.getAttribute("data-marker-icon-shadow-url");

  const markerX = script?.getAttribute("data-marker-x");
  const markerY = script?.getAttribute("data-marker-y");
  const markerTooltip = script?.getAttribute("data-marker-tooltip");

  const mapHeight = script?.getAttribute("data-map-height");
  const mapWidth = script?.getAttribute("data-map-width");

  const mapElement = document.getElementById(mapId);
  mapElement.style.height = mapWidth;
  mapElement.style.width = mapHeight;

  const map = L.map(mapId).setView([mapCenterX, mapCenterY], defaultZoom);

  L.tileLayer(`${tileBaseURL}/{z}/{x}/{y}.png`, {
    minZoom: minZoom,
    maxZoom: maxZoom,
    attribution: `&copy; <a href="${copyrightURL}">${copyrightName}</a>`,
    className: "nozoom",
  }).addTo(map);

  if (markerX && markerY) {
    const markerIcon = L.icon({
      iconUrl: markerIconURL,
      iconRetinaUrl: markerIconRetinaURL,
      shadowUrl: markerIconShadowURL,
      className: "nozoom",
    });
    const marker = L.marker([markerX, markerY], { icon: markerIcon }).addTo(map);
    markerTooltip && marker.bindTooltip(`<p>${markerTooltip}</p>`);
  }
})();
