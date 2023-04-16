/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      getByData: (value: string) => Chainable<Element>
    }
  }
}

Cypress.Commands.add("getByData", (selector: string): void | Chainable<Element> => {
    return cy.get(`[data-test=${selector}]`);
  });

export {}
