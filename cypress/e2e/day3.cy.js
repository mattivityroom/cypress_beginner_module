describe('day 3 - Handling Asynchronous Behavior', () => {
    it ('async wait for add to cart', () => {
        cy.visit('https://sauce-demo.myshopify.com/products/bronze-sandals')

        // ❌ It will not click the button
        // const btn = cy.get('.add-to-cart')
        // btn.click

        cy.intercept('POST', '/cart/add.js').as('addToCart');
        cy.get('.add-to-cart').should('be.enabled')
        cy.get('.add-to-cart').click();
        cy.wait('@addToCart');

        cy.get('.checkout').click()
        cy.url().should('include', "/cart")
    })

    it ('async wait  for sold item', () => {
        cy.visit('https://sauce-demo.myshopify.com/products/white-sandals')
        cy.get('.add-to-cart').should('not.be.enabled')
    });
});