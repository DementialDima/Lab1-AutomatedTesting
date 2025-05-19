describe('Перевірка логотипа', () => {
  it('логотип повинен бути видимим', () => {
    cy.visit('https://magento.softwaretestingboard.com');
    cy.get('.logo').should('be.visible');
  });
});
