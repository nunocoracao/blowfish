const fs = require('fs');
const puppeteer = require("puppeteer");

const usersFolderPath = "./exampleSite/content/users/"

let rawdata = fs.readFileSync(usersFolderPath + 'users.json');
let users = JSON.parse(rawdata);

const files = fs.readdirSync(usersFolderPath);
console.log(files);

for (file in files) {

    let stats = fs.statSync(usersFolderPath + files[file]);
    if (files[file] != 'users.json' && files[file] != '_index.md' && files[file] != 'tempusers.txt' && files[file] != 'oldindex.md') {
        console.log('deleting: ', files[file]);
        if (stats.isDirectory()) {
            fs.rmdirSync(usersFolderPath + files[file], { recursive: true, force: true });
        } else {
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
            console.log(i, users[i].title);

            var userMDFile = "---\n\
                title: \""+ users[i].title + "\"\n\
                slug: \"users\"\n\
                tags: []\n\
                externalUrl: \""+ users[i].url + "\"\n\
                showDate: false\n\
                showAuthor: false\n\
                showReadingTime: false\n\
                showEdit: false\n\
                showLikes: false\n\
                showViews: false\n\
                layoutBackgroundHeaderSpace: false\n\
                \r---\n";

            var dir = usersFolderPath + i + users[i].title;

            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }

            fs.writeFileSync(dir + '/index.md', userMDFile);

            await page.goto(users[i].url);
            await page.screenshot({ path: dir + "/feature.png" });
        }

        await browser.close();

    });


/*
puppeteer
  .launch({
    defaultViewport: {
      width: 1280,
      height: 800,
    },
  })
  .then(async (browser) => {
    const page = await browser.newPage();
    await page.goto("https://nytimes.com");
    await page.screenshot({ path: "nyt-puppeteer.png" });
    await browser.close();
  });*/