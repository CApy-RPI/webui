describe('Profile Page', () => {
    it('displays the correct main title', () => {
        cy.visit('localhost:5173profile');

        cy.get('h1').should('contain', 'Profile');
    });
});
