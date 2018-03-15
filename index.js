const puppeteer = require('puppeteer');
const mkdirp = require('mkdirp');

async function main() {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    let page = await browser.newPage();

    page.setViewport({
        width: 640,
        height: 680
    });
    await page.goto('https://www.yahoo.co.jp/');
    await new Promise(res => setTimeout(() => res(), 300));
    await page.screenshot({
        path: 'screenshot/index.png',
        fullPage: true
    });

    await page.close();
    await browser.close();
}

mkdirp.sync('screenshot');
main();