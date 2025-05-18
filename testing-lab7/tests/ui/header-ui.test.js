const puppeteer = require('puppeteer');

let browser, page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto('https://magento.softwaretestingboard.com');
});

afterAll(() => browser.close());

test('Перевірка логотипу', async () => {
  const logo = await page.$('.logo');
  expect(logo).toBeTruthy();
});

test('Перевірка наявності пошуку', async () => {
  const search = await page.$('#search');
  expect(search).toBeTruthy();
});

test('Перевірка наявності навігації', async () => {
  const nav = await page.$('.navigation');
  expect(nav).toBeTruthy();
});

test('Перевірка наявності футера', async () => {
  const footer = await page.$('footer');
  expect(footer).toBeTruthy();
});

test('Перевірка відображення корзини', async () => {
  const cart = await page.$('.showcart');
  expect(cart).toBeTruthy();
});