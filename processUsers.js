const fs = require("fs/promises");
const crypto = require("crypto");
const puppeteer = require("puppeteer");
const translate = require("@iamtraction/google-translate");

const configDir = "./exampleSite/config/_default";
const defaultLang = "en";
const usersFolderPath = "./exampleSite/content/users/";

let cache = {};

function generateDirName(seed) {
  const hash = crypto.createHash("md5");
  hash.update(seed);
  return hash.digest("hex");
}

async function convert(text, from, to) {
  const options = { from, to };
  if (!cache[to]) cache[to] = {};
  if (cache[to][text]) return cache[to][text];
  const translated_text = await translate(text, options);
  cache[to][text] = translated_text.text;
  return translated_text.text;
}

async function translateFrontMatterTags(block, targetLang, tags) {
  const array = block.split("\n");
  let translatedBlock = "";
  for (const line of array) {
    let newElement = line;
    if (line.indexOf(":") > -1) {
      const elements = line.split(":");
      if (elements[0].indexOf("tags") != -1) {
        const translatedTags = [];
        for (const tag of tags) {
          const tempTag = await convert(tag, defaultLang, targetLang);
          translatedTags.push(tempTag);
        }
        const trasnlatedTagsString = translatedTags.join(", ");
        newElement = elements[0] + ": [" + trasnlatedTagsString + "]";
      }
    }
    translatedBlock += newElement + "\n";
  }
  return translatedBlock;
}

(async () => {
  const targetLangs = [];
  const configFiles = await fs.readdir(configDir);
  for (const file of configFiles) {
    if (file.indexOf("languages.") > -1) {
      const lang = file.split(".")[1];
      if (lang !== defaultLang) {
        targetLangs.push(lang);
      }
    }
  }

  const indexFiles = await fs.readdir(usersFolderPath);
  for (const lang of targetLangs) {
    const targetFile = `_index.${lang}.md`;
    if (!indexFiles.includes(targetFile)) {
      await fs.copyFile(
        usersFolderPath + "_index.md",
        usersFolderPath + targetFile
      );
    }
  }

  const rawdata = await fs.readFile(usersFolderPath + "users.json", "utf8");
  const users = JSON.parse(rawdata);
  const userDict = {};
  for (const user of users) {
    userDict[generateDirName(user.url)] = true;
  }

  const files = await fs.readdir(usersFolderPath);
  for (const file of files) {
    const stats = await fs.stat(usersFolderPath + file);
    if (file !== "users.json" && file.indexOf("_index.") === -1) {
      if (stats.isDirectory()) {
        if (!userDict[file]) {
          console.log("deleting: ", file);
          await fs.rm(usersFolderPath + file, { recursive: true, force: true });
        }
      } else {
        console.log("deleting: ", file);
        await fs.unlink(usersFolderPath + file);
      }
    }
  }

  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1280,
      height: 800,
    },
  });
  const page = await browser.newPage();

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const userMDFile =
      "---\n" +
      `                title: "${user.title}"\n` +
      `                tags: [${user.tags}]\n` +
      `                externalUrl: "${user.url}"\n` +
      `                weight: ${i + 1}\n` +
      "                showDate: false\n" +
      "                showAuthor: false\n" +
      "                showReadingTime: false\n" +
      "                showEdit: false\n" +
      "                showLikes: false\n" +
      "                showViews: false\n" +
      "                layoutBackgroundHeaderSpace: false\n" +
      "                \r---\n";

    const dir = usersFolderPath + generateDirName(user.url);

    try {
      await fs.access(dir);
    } catch {
      await fs.mkdir(dir);
    }

    console.log(i, user.title, dir);
    await fs.writeFile(dir + "/index.md", userMDFile);
    for (const lang of targetLangs) {
      const content = await translateFrontMatterTags(userMDFile, lang, user.tags);
      await fs.writeFile(dir + `/index.${lang}.md`, content);
    }
    await page.goto(user.url);
    await page.screenshot({ path: dir + "/feature.jpg", type: "webp", quality: 50 });
  }


  await browser.close();
})();

