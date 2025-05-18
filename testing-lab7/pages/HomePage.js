class HomePage {
  constructor(page) {
    this.page = page;
    this.logoSelector = '.logo';
  }

  async isLogoVisible() {
    await this.page.waitForSelector(this.logoSelector);
    return await this.page.$(this.logoSelector) !== null;
  }
}

module.exports = HomePage;