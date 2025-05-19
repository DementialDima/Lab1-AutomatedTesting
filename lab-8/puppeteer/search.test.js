const puppeteer = require('puppeteer');
jest.setTimeout(20000); 

describe('Пошук товару', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('https://magento.softwaretestingboard.com');
  }, 15000); 

  afterAll(async () => {
    await browser.close();
  });

  test('має знайти товари "jacket"', async () => {
    await page.type('#search', 'jacket');
    await page.keyboard.press('Enter');
    await page.waitForSelector('.product-item');
    const count = await page.evaluate(() => {
      return document.querySelectorAll('.product-item').length;
    });
    expect(count).toBeGreaterThan(0);
  }, 10000); 
});
