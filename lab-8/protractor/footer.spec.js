await browser.get('https://magento.softwaretestingboard.com');
const footer = element(by.css('footer'));
expect(await footer.isPresent()).toBe(true);