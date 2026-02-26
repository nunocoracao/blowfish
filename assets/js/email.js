(function () {
  const links = document.querySelectorAll(".email-link");
  links.forEach((link) => {
    let email = atob(link.getAttribute("data-email"));
    const subject = link.getAttribute("data-subject");
    let mailto = email.startsWith("mailto:") ? email : "mailto:" + email;

    if (subject) {
      mailto += (mailto.includes("?") ? "&" : "?") + "subject=" + encodeURIComponent(subject);
    }
    link.href = mailto;
  });
})();
