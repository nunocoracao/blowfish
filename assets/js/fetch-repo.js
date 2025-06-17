function fetchRepo() {
  const scriptElement = document.currentScript;
  const repoURL =
    scriptElement && scriptElement.getAttribute("data-repo-url")
      ? scriptElement.getAttribute("data-repo-url")
      : (console.error("data-repo-url is null"), null);
  const repoId =
    scriptElement && scriptElement.getAttribute("data-repo-id")
      ? scriptElement.getAttribute("data-repo-id")
      : (console.error("data-repo-id is null"), null);
  const requestObjects = repoId.startsWith("github")
    ? ["full_name", "description", "stargazers_count", "forks"]
    : repoId.startsWith("gitlab")
      ? ["name_with_namespace", "description", "star_count", "forks_count"]
      : ["full_name", "description", "stars_count", "forks_count"];
  fetch(repoURL, {
    headers: new Headers({
      "User-agent": "Mozilla/4.0 Custom User Agent",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      requestObjects.forEach((requestObject) => {
        let element = document.getElementById(`${repoId}-${requestObject}`);
        if (requestObject === "stargazers_count" && repoId.startsWith("github")) {
          element = document.getElementById(`${repoId}-stargazers`);
        }
        element
          ? (element.innerHTML = data[requestObject])
          : (console.error(`Element '${repoId}-${requestObject}' not found`), null);
      });
    })
    .catch((error) => console.error(error));
}

fetchRepo();
