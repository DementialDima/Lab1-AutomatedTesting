await browser.get('https://magento.softwaretestingboard.com');
const logo = element(by.css('.logo'));
expect(await logo.isPresent()).toBe(true);