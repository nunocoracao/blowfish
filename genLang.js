const fs = require("fs/promises");
const translate = require("@iamtraction/google-translate");

const configDir = "./exampleSite/config/_default";
const contentDir = "./exampleSite/content";
const defaultLang = "en";
const targetLang = process.argv[2] || "en";
const targetLangIso = targetLang == "pt" ? "pt-pt" : targetLang;

async function createConfigs() {
  const files = await fs.readdir(configDir);
  for (const file of files) {
    const filePath = `${configDir}/${file}`;
    if (
      filePath.indexOf("languages.en.toml") > -1 ||
      filePath.indexOf("menus.en.toml") > -1
    ) {
      const fileContent = await fs.readFile(filePath, "utf8");
      await fs.writeFile(
        filePath.replace(".en.toml", "." + targetLangIso + ".toml"),
        fileContent,
        "utf8"
      );
    }
  }
}

async function convert(text, from, to) {
  const options = { from, to };
  const translated_text = await translate(text, options).catch((err) => {
    console.error(err);
  });
  return translated_text && translated_text.text ? translated_text.text : "";
}

async function processFrontMatter(block) {
  const array = block.split("\n");
  let translatedBlock = "";
  for (const line of array) {
    let newElement = line;
    if (line.indexOf(":") > -1) {
      const elements = line.split(":");
      if (
        elements[0] == "title" ||
        elements[0] == "description" ||
        elements[0] == "summary" ||
        elements[0] == "description" ||
        elements[0] == "categories" ||
        elements[0] == "tags"
      ) {
        const translatedElement = elements[1]
          ? await convert(elements[1], defaultLang, targetLang)
          : elements[1];
        newElement = elements[0] + ": " + translatedElement;
      }
    }
    translatedBlock += newElement + "\n";
  }
  return translatedBlock;
}

async function processFile(filePath) {
  console.log("translating", filePath);
  if (filePath.indexOf("index.md") > -1) {
    const targetFilePath = filePath.replace(
      ".md",
      "." + targetLangIso + ".md"
    );

    const fileContent = await fs.readFile(filePath, "utf8");

    const array = fileContent.split("---\n");
    const frontMatter = array[1];
    const content = array[2];

    const translatedFrontMatter = await processFrontMatter(frontMatter);
    const translatedContent = await convert(content, defaultLang, targetLang);

    const newFileContent =
      "---\n" + translatedFrontMatter + "---\n" + translatedContent;
    await fs.writeFile(targetFilePath, newFileContent, "utf8");
  } else {
    return;
  }
}

async function processFolder(folderPath) {
  const files = await fs.readdir(folderPath);

  for (const file of files) {
    const filePath = `${folderPath}/${file}`;
    const isDir = (await fs.lstat(filePath)).isDirectory();
    console.log(filePath, isDir);
    if (isDir) {
      await processFolder(filePath);
    } else {
      await processFile(filePath);
    }
  }
}

async function createContent() {
  await processFolder(contentDir);
}

(async () => {
  await createConfigs();
  await createContent();
})();

