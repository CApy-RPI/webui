describe('Organizations Page', () => {
    it('displays the correct main title', () => {
        cy.visit('localhost:5173/organizations');

        cy.get('h1').should('contain', 'My Organizations');
    });
});
