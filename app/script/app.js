const puppeteer = require('puppeteer');

const screenshot_image_filepath = '../data/';
const screenshot_image_filename_prefix = 'APP_';
const top_url = 'http://example.com';

(async() => {
    
    console.log('----START----');
    const browser = await puppeteer.launch({
//        ignoreHTTPSErrors: true, // 自己認証SSL環境の場合必要
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ]
    });
    const page = await browser.newPage();
    await page.goto(top_url);
    await page.waitForSelector('body');
    // スクリーンショット
    await page.screenshot({
        fullPage: true,
        path: screenshot_image_filepath + screenshot_image_filename_prefix + 'example_top.png'
    });

    browser.close();
        
    console.log('----END----');
})();
