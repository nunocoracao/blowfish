module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run example:production -- --disableLiveReload --minify",
      startServerReadyPattern: "Web Server is available",
      url: ["http://localhost:8008/blowfish/samples/emoji/"],
      settings: {
        skipAudits: ["uses-text-compression", "uses-long-cache-ttl"],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
