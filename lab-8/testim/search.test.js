await testim.navigateTo('https://magento.softwaretestingboard.com');
await testim.click('.search');
await testim.type('#search', 'jacket');
await testim.keyPress('Enter');
await testim.waitForVisible('.product-item');