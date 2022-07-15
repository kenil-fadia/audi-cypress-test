/// <reference types="cypress" />

describe("Audi Launch Page Test", () => {

  before("Test Setup", () => {
    cy.viewport(Cypress.config('width'), Cypress.config('height'));
    cy.eyesOpen({
      appName: 'Audi Page',
      testName: `Audi Test Page (Width: ${Cypress.config('width')}, Height: ${Cypress.config('height')})`,
    })
    cy.visit(`${Cypress.config('baseUrl')}/en/editorial-teaser`);
  });

  it("Audi Page Component Visibility Test", () => {
    cy.get("[data-testid = 'header']")
      .should("be.visible");

    cy.get("[data-testid = 'editorial-teaser']")
      .should("be.visible");

    cy.get("[data-testid = 'footer']")
      .should("be.visible");

    cy.screenshot("homepage");

    cy.eyesCheckWindow({
      tag: `Home page - (Width: ${Cypress.config('width')}, Height: ${Cypress.config('height')})`,
      target: 'window',
      fully: true
    });
  });

  after("Kill applitools", () => {
    cy.eyesClose()
  });
});
