describe('Organizations Page', () => {
    it('displays the correct main title', () => {
        cy.visit('localhost:5173/organizations');

        cy.should('contain', 'my orgs');
    });
});
