const puppeteer = require("puppeteer");

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: true });
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

test("Реєстрація нового користувача", async () => {
  await page.goto("https://magento.softwaretestingboard.com/customer/account/create/");

  await page.type("#firstname", "Іван");
  await page.type("#lastname", "Тестовий");

  const email = `test${Date.now()}@example.com`;
  await page.type("#email_address", email);
  await page.type("#password", "Test1234!");
  await page.type("#password-confirmation", "Test1234!");

  await page.click("button[title='Create an Account']");
  await page.waitForSelector(".message-success, .page-title");

  const success = await page.$eval(".page-title", el => el.textContent.trim());
  expect(success).toMatch(/My Account/i);
}, 15000);

test("Пошук товару 'jacket'", async () => {
  await page.goto("https://magento.softwaretestingboard.com/");

  await page.click(".search");
  await page.type("#search", "jacket");
  await page.keyboard.press("Enter");

  await page.waitForSelector(".product-item");

  const results = await page.$$eval(".product-item", items => items.length);
  expect(results).toBeGreaterThan(0);
});

test("Додавання товару до корзини", async () => {
  await page.goto("https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html");

  await page.waitForSelector(".product-item");
  await page.click(".product-item .product-item-link");

  await page.waitForSelector("#option-label-size-143-item-166");
  await page.click("#option-label-size-143-item-166"); // Розмір
  await page.click("#option-label-color-93-item-50"); // Колір

  await page.click("#product-addtocart-button");
  await page.waitForSelector(".message-success");

  const cartText = await page.$eval(".message-success", el => el.textContent);
  expect(cartText).toMatch(/You added .* to your shopping cart/);
}, 15000);
