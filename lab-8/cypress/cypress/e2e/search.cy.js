cy.visit('https://magento.softwaretestingboard.com');
cy.get('.search').click();
cy.get('#search').type('jacket{enter}');
cy.get('.product-item').should('have.length.greaterThan', 0);