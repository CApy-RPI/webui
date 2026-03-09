describe('Organizations Page', () => {
    it('displays the correct main title', () => {
        cy.visit('localhost:5173/app/organizations');

        cy.contains('my orgs');
    });
});
