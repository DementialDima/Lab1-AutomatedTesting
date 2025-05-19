module.exports = {
  'Пошук товару': function (browser) {
    browser
      .url('https://magento.softwaretestingboard.com')
      .waitForElementVisible('body', 1000)
      .click('.search')
      .setValue('#search', 'jacket')
      .keys(browser.Keys.ENTER)
      .waitForElementVisible('.product-item', 5000)
      .end();
  }
};