describe('Home Page', () => {
    it('displays the correct main title', () => {
        cy.visit('localhost:5173');

        cy.get('h1').should('contain', 'Home');
    });
});
