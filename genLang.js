const fs = require('fs');
const translate = require('@iamtraction/google-translate');

const configDir = "./exampleSite/config/_default";
const contentDir = "./exampleSite/content";
const defaultLang = "en";
const targetLang = process.argv[2] || "en";
const targetLangIso = targetLang == "pt" ? "pt-pt" : targetLang;


function createConfigs() {
    const files = fs.readdirSync(configDir);
    files.forEach(file => {
        const filePath = `${configDir}/${file}`;
        if (filePath.indexOf("languages.en.toml") > -1 ||
            filePath.indexOf("menus.en.toml") > -1) {
            var fileContent = fs.readFileSync(filePath, 'utf8');
            fs.writeFileSync(filePath.replace(".en.toml", "." + targetLangIso + ".toml"), fileContent, 'utf8');
        }
    });
}

async function convert(text, from, to) {
    var options = {
        from: from,
        to: to
    };
    var translated_text = await translate(text, options)
        .catch(err => {
            console.error(err);
        });;
    return translated_text && translated_text.text? translated_text.text : '';
}

async function processFrontMatter(block) {
    var array = block.split("\n");
    var translatedBlock = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i].indexOf(":") > -1) {
            var elements = array[i].split(":");
            var newElement = "";
            if (elements[0] == "title" ||
                elements[0] == "description" ||
                elements[0] == "summary" ||
                elements[0] == "description" ||
                elements[0] == "categories" ||
                elements[0] == "tags") {
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

async function processFile(filePath) {
    console.log("translating", filePath)
    if (filePath.indexOf("index.md") > -1) {

        const targetFilePath = filePath.replace(".md", "." + targetLangIso + ".md");

        const fileContent = fs.readFileSync(filePath, 'utf8');

        var array = fileContent.split("---\n")
        var frontMatter = array[1];
        var content = array[2];

        var translatedFrontMatter = await processFrontMatter(frontMatter);
        var translatedContent = await convert(content, defaultLang, targetLang);

        var newFileContent = "---\n" + translatedFrontMatter + "---\n" + translatedContent;
        fs.writeFileSync(targetFilePath, newFileContent, 'utf8');

    } else
        return
}

async function processFolder(folderPath) {
    const files = fs.readdirSync(folderPath);

    for (var i in files) {
        const file = files[i];
        const filePath = `${folderPath}/${file}`;
        const isDir = fs.lstatSync(filePath).isDirectory();
        console.log(filePath, isDir);
        if (isDir) {
            await processFolder(filePath);
        } else {
            await processFile(filePath);
        }
    }
}

async function createContent() {
    processFolder(contentDir);
}

createConfigs();
createContent();