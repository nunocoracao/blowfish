const fs = require('fs');
const puppeteer = require("puppeteer");

const usersFolderPath = "./exampleSite/content/users/"

let rawdata = fs.readFileSync(usersFolderPath + 'users.json');
let users = JSON.parse(rawdata);
let userDict = {}
for (var i in users) {
    userDict[users[i].title.replaceAll("/", "-")] = true;
}

const files = fs.readdirSync(usersFolderPath);


for (file in files) {

    let stats = fs.statSync(usersFolderPath + files[file]);
    if (files[file] != 'users.json' && files[file] != '_index.md') {
        if (stats.isDirectory()) {
            if (!userDict[files[file].replaceAll("/", "-")]) {
                console.log('deleting: ', files[file]);
                fs.rmdirSync(usersFolderPath + files[file], { recursive: true, force: true });
            }
        } else {
            console.log('deleting: ', files[file]);
            fs.unlinkSync(usersFolderPath + files[file]);
        }
    }
}


puppeteer
    .launch({
        defaultViewport: {
            width: 1280,
            height: 800,
        },
    })
    .then(async (browser) => {

        const page = await browser.newPage();

        for (var i in users) {

            var userMDFile = "---\n\
                title: \""+ users[i].title + "\"\n\
                tags: ["+ users[i].tags + "]\n\
                externalUrl: \""+ users[i].url + "\"\n\
                date: "+ (9999 - i) + "-08-08\n\
                showDate: false\n\
                showAuthor: false\n\
                showReadingTime: false\n\
                showEdit: false\n\
                showLikes: false\n\
                showViews: false\n\
                layoutBackgroundHeaderSpace: false\n\
                \r---\n";

            var dir = usersFolderPath + users[i].title.replaceAll("/", "-");

            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }

            console.log(i, users[i].title);
            fs.writeFileSync(dir + '/index.md', userMDFile);
            await page.goto(users[i].url);
            await page.screenshot({ path: dir + "/feature.jpg" });
        }

        await browser.close();

    });