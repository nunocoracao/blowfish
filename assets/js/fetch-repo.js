function fetchRepo() {
  const script = document.currentScript;
  const repoURL = script && script.getAttribute("data-url") ? script.getAttribute("data-url")
    : (console.error("data-url is null"), null);
  const repoId = script && script.getAttribute("data-id") ? script.getAttribute("data-id")
    : (console.error("data-id is null"), null);
  const requestObjects =
    repoId.startsWith("github") ? ["full_name", "description", "stargazers_count", "forks"]
    : repoId.startsWith("gitlab") ? ["name_with_namespace", "description", "star_count", "forks_count"]
    : ["full_name", "description", "stars_count", "forks_count"];
  fetch(repoURL, {
    headers: new Headers({
      "User-agent": "Mozilla/4.0 Custom User Agent"
    })
  })
    .then((response) => response.json())
    .then((data) => {
      requestObjects.forEach((requestObject) => {
        let element = document.getElementById(`${repoId}-${requestObject}`);
        if (requestObject === "stargazers_count" && repoId.startsWith("github")) {
            element = document.getElementById(`${repoId}-stargazers`);
        }
        element ? (element.innerHTML = data[requestObject])
          : (console.error(`element.innerHTML for '${repoId}-${requestObject}' is null`), null);
      });
    })
    .catch((error) => console.error(error));
}

fetchRepo();
