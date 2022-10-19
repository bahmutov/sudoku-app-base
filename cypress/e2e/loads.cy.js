/// <reference types="cypress" />
describe('Sudoku', () => {
  it('loads', () => {
    // visit the baseUrl
    // https://on.cypress.io/visit
    cy.visit('/')
    // check that the timer shows 3 seconds passed
    // https://on.cypress.io/contains
    cy.contains('.status__time', '00:03')
    // check how many filled cells there are
    // https://on.cypress.io/get
    // https://glebbahmutov.com/cypress-examples/commands/assertions.html
    cy.get('.game__cell--filled').should('have.length', 45)
  })
})
