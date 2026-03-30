(function () {
  function getStorage(storageName) {
    try {
      if (storageName === "sessionStorage") {
        return window.sessionStorage;
      }

      return window.localStorage;
    } catch (error) {
      return null;
    }
  }

  function hideBanner(banner) {
    banner.setAttribute("hidden", "hidden");
  }

  function showBanner(banner) {
    banner.removeAttribute("hidden");
  }

  function initBanner(banner) {
    var storageName = banner.getAttribute("data-cookie-notice-storage") || "localStorage";
    var storageKey = banner.getAttribute("data-cookie-notice-key") || "blowfish_cookie_notice_ack_v1";
    var acceptButton = banner.querySelector("[data-cookie-notice-accept]");
    var storage = getStorage(storageName);

    if (storage && storage.getItem(storageKey) === "1") {
      hideBanner(banner);
      return;
    }

    showBanner(banner);

    if (!acceptButton) {
      return;
    }

    acceptButton.addEventListener("click", function () {
      if (storage) {
        try {
          storage.setItem(storageKey, "1");
        } catch (error) {
          // Ignore storage write failures and still hide the banner for this page view.
        }
      }

      hideBanner(banner);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var banners = document.querySelectorAll("[data-cookie-notice]");

    banners.forEach(function (banner) {
      initBanner(banner);
    });
  });
})();
