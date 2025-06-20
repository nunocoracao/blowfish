(async () => {
  const script = document.currentScript;
  const repoURL = script?.getAttribute("data-repo-url");
  const repoId = script?.getAttribute("data-repo-id");

  if (!repoURL || !repoId) return;

  const platforms = {
    github: {
      full_name: "full_name",
      description: "description",
      stargazers_count: "stargazers",
      forks: "forks",
    },
    gitlab: {
      name_with_namespace: "name_with_namespace",
      description: "description",
      star_count: "star_count",
      forks_count: "forks_count",
    },
    gitea: {
      full_name: "full_name",
      description: "description",
      stars_count: "stars_count",
      forks_count: "forks_count",
    },
    codeberg: {
      full_name: "full_name",
      description: "description",
      stars_count: "stars_count",
      forks_count: "forks_count",
    },
    forgejo: {
      full_name: "full_name",
      description: "description",
      stars_count: "stars_count",
      forks_count: "forks_count",
    },
  };

  const platform = Object.keys(platforms).find((p) => repoId.startsWith(p)) || "github";
  const mapping = platforms[platform];

  try {
    const response = await fetch(repoURL, {
      headers: { "User-agent": "Mozilla/4.0 Custom User Agent" },
    });
    const data = await response.json();

    Object.entries(mapping).forEach(([dataField, elementSuffix]) => {
      const element = document.getElementById(`${repoId}-${elementSuffix}`);
      if (element) element.innerHTML = data[dataField];
    });
  } catch (error) {
    console.error(error);
  }
})();
