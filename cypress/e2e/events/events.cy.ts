describe('Event Page', () => {
    it('displays the correct main title', () => {
        cy.visit('localhost:5173/events');

        cy.contains('my events');
    });
});
