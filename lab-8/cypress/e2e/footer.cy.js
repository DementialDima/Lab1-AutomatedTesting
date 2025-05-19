describe('Перевірка футера', () => {
  it('має бути присутній на сторінці', () => {
    cy.visit('https://magento.softwaretestingboard.com');
    cy.get('footer').should('exist');
  });
});
