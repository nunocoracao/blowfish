const fs = require("fs/promises");

const configDir = "./exampleSite/config/_default";
const contentDir = "./exampleSite/content";
const defaultLang = "en";

const targetLangs = [];

async function readConfigs() {
  const files = await fs.readdir(configDir);
  for (const file of files) {
    console.log(file);
    if (file.indexOf("languages.") > -1) {
      const lang = file.split(".")[1];
      console.log(lang);
      if (lang != defaultLang) {
        targetLangs.push(lang);
      }
    }
  }
}

async function processFile(filePath, file) {
  if (filePath.indexOf("index.md") > -1) {
    console.log("processing", filePath);

    for (const targetLang of targetLangs) {
      const targetFilePath = filePath.replace(".md", "." + targetLang + ".md");

      let exists = true;
      try {
        await fs.access(targetFilePath);
      } catch {
        exists = false;
      }

      if (exists) {
        console.log("file already exists", targetFilePath);
      } else {
        console.log("creating file", targetFilePath);
        await fs.copyFile(filePath, targetFilePath);
      }
    }
  } else {
    return;
  }
}

async function processFolder(folderPath) {
  const files = await fs.readdir(folderPath);

  for (const file of files) {
    const filePath = `${folderPath}/${file}`;
    const isDir = (await fs.lstat(filePath)).isDirectory();
    if (isDir) {
      await processFolder(filePath);
    } else {
      await processFile(filePath, file);
    }
  }
}

async function createLinks() {
  await processFolder(contentDir);
}

(async () => {
  await readConfigs();
  await createLinks();
})();

