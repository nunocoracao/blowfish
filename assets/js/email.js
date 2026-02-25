(function () {
  const links = document.querySelectorAll(".email-link");
  links.forEach((link) => {
    const email = atob(link.getAttribute("data-email"));
    const subject = link.getAttribute("data-subject");
    let mailto = "mailto:" + email;
    if (subject) {
      mailto += "?subject=" + encodeURIComponent(subject);
    }
    link.href = mailto;
  });
})();
