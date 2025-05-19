await browser.get('https://magento.softwaretestingboard.com');
await element(by.css('.search')).click();
await element(by.css('#search')).sendKeys('jacket', protractor.Key.ENTER);
const items = element.all(by.css('.product-item'));
expect(await items.count()).toBeGreaterThan(0);