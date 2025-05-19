const puppeteer = require('puppeteer');
jest.setTimeout(20000); 

describe('Перевірка логотипа', () => {
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

  test('логотип повинен бути видимим', async () => {
    const logo = await page.$('.logo');
    const isVisible = await page.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style && style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
    }, logo);

    expect(isVisible).toBe(true);
  }, 10000); 
});
