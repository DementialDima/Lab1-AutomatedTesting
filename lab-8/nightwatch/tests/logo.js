module.exports = {
  'Логотип видимий': function (browser) {
    browser
      .url('https://magento.softwaretestingboard.com')
      .waitForElementVisible('.logo', 3000)
      .end();
  }
};