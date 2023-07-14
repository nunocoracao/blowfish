const fs = require('fs');
const puppeteer = require("puppeteer");

const usersFolderPath = "./exampleSite/content/users/"

let rawdata = fs.readFileSync(usersFolderPath + 'users.json');
let users = JSON.parse(rawdata);



for(var i in users){
    console.log(i, users[i].title);

    var userMDFile = "---\n\
        title: \""+users[i].title+"\"\n\
        slug: \"users\"\n\
        tags: []\n\
        externalUrl: \"\"\n\
        showDate: false\n\
        showAuthor: false\n\
        showReadingTime: false\n\
        showEdit: false\n\
        showLikes: false\n\
        showViews: false\n\
        layoutBackgroundHeaderSpace: false\n\
        \r---\n"

    fs.writeFileSync(usersFolderPath + i + users[i].title + '.md', userMDFile);


}


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