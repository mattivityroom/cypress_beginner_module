describe('template test', () => {
    it('Visits the Kitchen Sink', () => {
        // Arrange
        cy.visit('')
        cy.contains('type')
            .click()

        cy.url()
            .should('include', 'commands/actions')

        // Act
        cy.get('#email1', { timeout: 10000 })
            .type('test@example.com')

        // Assertion
        cy.get('#email1').
            should('have.value', 'test@example.com')
    })
})