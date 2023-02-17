/* eslint-disable no-undef */
describe("Landing Page", () => {
  it("should contain a 'H1'", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="h1"]').click();
    cy.location("pathname").should("eq", "/");
    cy.get('[data-cy="start"]').click();
  });
});

export {};
