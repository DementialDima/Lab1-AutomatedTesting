const puppeteer = require("puppeteer");

let browser;
let page;
const URL = "https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html";

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: true }); 
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

beforeEach(async () => {
  await page.goto(URL, { waitUntil: "domcontentloaded" });
});

test("Перевірка заголовка сторінки", async () => {
  const title = await page.title();
  expect(title).toMatch(/Jackets/i);
});

test("Перевірка наявності товарів на сторінці", async () => {
  const items = await page.$$eval(".product-item", items => items.length);
  expect(items).toBeGreaterThan(0);
});

test("Перевірка наявності фільтрів", async () => {
  const filters = await page.$$eval(".filter-options-title", items => items.length);
  expect(filters).toBeGreaterThan(0);
});

test("Перевірка кількості товарів дорівнює 13", async () => {
  const items = await page.$$eval(".product-item", items => items.length);
  expect(items).toBe(13);
});


test("Перевірка, що перші 6 товарів відсортовані за зростанням ціни", async () => {
  await page.waitForSelector("select.sorter-options");

  const firstPriceBefore = await page.$eval('.price', el =>
    parseFloat(el.textContent.replace("$", "").replace(",", "").trim())
  );

  await page.select("select.sorter-options", "price");

  await page.waitForFunction(
    (initialPrice) => {
      const el = document.querySelector('.price');
      if (!el) return false;
      const price = parseFloat(el.textContent.replace("$", "").replace(",", "").trim());
      return price !== initialPrice;
    },
    {},
    firstPriceBefore
  );

  const prices = await page.$$eval(".price", nodes =>
    nodes.map(n =>
      parseFloat(n.textContent.replace("$", "").replace(",", "").trim())
    ).filter(n => !isNaN(n))
  );

  const sliced = prices.slice(0, 6); 
  const isSorted = sliced.every((v, i, a) => !i || a[i - 1] <= v);
  expect(isSorted).toBe(true);
});



