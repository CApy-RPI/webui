describe('Home Page', () => {
    it('displays the correct main title', () => {
        cy.visit('localhost:5173/app');

        cy.contains('UserId:');
    });
});
