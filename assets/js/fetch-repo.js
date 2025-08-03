(async () => {
  const script = document.currentScript;
  const repoURL = script?.getAttribute("data-repo-url");
  const repoId = script?.getAttribute("data-repo-id");

  if (!repoURL || !repoId) return;
  if (repoId.startsWith("forgejo")) {
    console.log(
      "fetch-repo.js: Forgejo server blocks cross-origin requests. Live JavaScript updates are not supported.",
    );
    return;
  }

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
    huggingface: {
      description: "description",
      likes: "likes",
      downloads: "downloads",
    },
  };

  const processors = {
    huggingface: {
      description: (value) => value?.replace(/Dataset Card for .+?\s+Dataset Summary\s+/, "").trim() || value,
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
      if (element) {
        let value = data[dataField];
        if (processors[platform]?.[dataField]) {
          value = processors[platform][dataField](value);
        }
        element.innerHTML = value;
      }
    });
  } catch (error) {
    console.error(`fetch-repo.js: ${error}`);
  }
})();
