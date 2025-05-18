class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchBox = '#search';
  }

  async search(query) {
    await this.page.click('.search');
    await this.page.type(this.searchBox, query);
    await this.page.keyboard.press('Enter');
    await this.page.waitForSelector('.product-item');
  }
}

module.exports = SearchPage;