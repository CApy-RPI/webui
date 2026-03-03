describe('Insights Page', () => {
    it('displays the correct main title', () => {
        cy.visit('localhost:5173/insights');

        cy.get('h1').should('contain', 'Insights');
    });
});
