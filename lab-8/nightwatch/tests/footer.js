module.exports = {
  'Футер існує': function (browser) {
    browser
      .url('https://magento.softwaretestingboard.com')
      .waitForElementVisible('footer', 3000)
      .end();
  }
};