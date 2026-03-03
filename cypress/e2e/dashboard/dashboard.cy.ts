describe("Dashboard Page", () => {
    it("displays the correct main title", () => {
        cy.visit("http://localhost:3000")

        cy.get("h1").should("contain", "My Dashboard")
    })
})