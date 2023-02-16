/* eslint-disable no-undef */
import React from "react";
import App from "./App";

describe("<App />", () => {
  it("renders", () => {
    cy.mount(<App />);
    cy.get('[data-cy="h1"]');
  });
});
