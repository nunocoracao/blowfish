const fs = require("fs");
const translate = require("@iamtraction/google-translate");

const defaultLang = "en";
const targetLang = process.argv[2] || "en";
const filePath = process.argv[3];
const targetLangIso = targetLang == "pt" ? "pt-pt" : targetLang;
const targetFilePath = filePath.replace(".md", "." + targetLangIso + ".md");

async function convert(text, from, to) {
  var options = {
    from: from,
    to: to,
  };
  var translated_text = await translate(text, options);
  return translated_text.text;
}

console.log(filePath);
console.log(targetFilePath);

async function processFrontMatter(block) {
  var array = block.split("\n");
  var translatedBlock = "";
  for (var i = 0; i < array.length; i++) {
    if (array[i].indexOf(":") > -1) {
      var elements = array[i].split(":");
      var newElement = "";
      if (
        elements[0] == "title" ||
        elements[0] == "description" ||
        elements[0] == "summary" ||
        elements[0] == "description" ||
        elements[0] == "categories" ||
        elements[0] == "tags"
      ) {
        var translatedElement = elements[1] ? await convert(elements[1], defaultLang, targetLang) : elements[1];
        newElement = elements[0] + ": " + translatedElement;
      } else {
        newElement = array[i];
      }
    } else {
      newElement = array[i];
    }
    translatedBlock += newElement + "\n";
  }
  return translatedBlock;
}

async function main() {
  const fileContent = fs.readFileSync(filePath, "utf8");

  var array = fileContent.split("---\n");
  var frontMatter = array[1];
  var content = array[2];

  var translatedFrontMatter = await processFrontMatter(frontMatter);
  var translatedContent = await convert(content, defaultLang, targetLang);

  var newFileContent = "---\n" + translatedFrontMatter + "---\n" + translatedContent;
  fs.writeFileSync(targetFilePath, newFileContent, "utf8");
}

main();
