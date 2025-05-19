const puppeteer = require('puppeteer');
jest.setTimeout(20000); 

describe('Перевірка футера', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('https://magento.softwaretestingboard.com');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('футер має бути присутній', async () => {
    const footer = await page.$('footer');
    expect(footer).not.toBeNull();
  });
});
