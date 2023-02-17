/* eslint-disable no-undef */
describe("answers are clickable", () => {
  it("answers should be rendered and clickable", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="start"]').click();
    cy.get('[data-cy="answer-1"]').should("be.visible");
    cy.get('[data-cy="answer-1"]').click();
  });
});

export {};
