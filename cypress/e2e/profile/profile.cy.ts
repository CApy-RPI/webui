describe("Profile Page", () => {
    it("displays the correct main title", () => {
        cy.visit("localhost:5173/profile")

        cy.get("h1").should("contain", "My Profile")
    })
})