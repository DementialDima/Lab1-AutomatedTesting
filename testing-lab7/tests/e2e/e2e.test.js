const puppeteer = require('puppeteer');

let browser, page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

afterAll(() => browser.close());

test('Реєстрація користувача', async () => {
  await page.goto('https://magento.softwaretestingboard.com/customer/account/create/');
  await page.type('#firstname', 'Іван');
  await page.type('#lastname', 'Тестовий');
  const email = `test${Date.now()}@example.com`;
  await page.type('#email_address', email);
  await page.type('#password', 'Test1234!');
  await page.type('#password-confirmation', 'Test1234!');
  await page.click('button[title="Create an Account"]');
  await page.waitForSelector('.page-title');
  const title = await page.$eval('.page-title', el => el.textContent);
  expect(title).toMatch(/My Account/i);
}, 15000);

test('Пошук товару', async () => {
  await page.goto('https://magento.softwaretestingboard.com');
  await page.click('.search');
  await page.type('#search', 'jacket');
  await page.keyboard.press('Enter');
  await page.waitForSelector('.product-item');
  const results = await page.$$eval('.product-item', items => items.length);
  expect(results).toBeGreaterThan(0);
}, 10000);

test('Додавання товару до корзини', async () => {
  await page.goto('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html');
  await page.waitForSelector('.product-item .product-item-link');
  await page.click('.product-item .product-item-link');
  await page.waitForSelector('#option-label-size-143-item-166');
  await page.click('#option-label-size-143-item-166');
  await page.click('#option-label-color-93-item-50');
  await page.click('#product-addtocart-button');
  await page.waitForSelector('.message-success');
  const message = await page.$eval('.message-success', el => el.textContent);
  expect(message).toMatch(/You added/i);
}, 15000);