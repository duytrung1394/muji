/**
 * title test sample
 */
describe('Firebird Platform', () => {

    it('.should() - assert that <title> is correct', () => {

        cy.visit('signin');
        cy.title().should('include', 'Firebird Platform')
    })

    it('.should() - assert that <title> is correct', () => {

        cy.visit('dashboard');
        cy.title().should('include', 'Firebird Platform')
    })
})
