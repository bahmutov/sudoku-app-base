/// <reference types="cypress" />
// @ts-check
describe('Play mode', () => {
  // visit the page
  // confirm the current mode is "Easy"
  // confirm the number of empty cells
  // change the mode to "Medium"
  // confirm the number of empty cells
  // change the mode to "Hard"
  // confirm the number of empty cells
  it('shows a different number of empty cells', () => {
    cy.visit('/')
    cy.get('[name=status__difficulty-select]').should('have.value', 'Easy')
    cy.get('.game__cell--filled').should('have.length', 45)
    cy.get('[name=status__difficulty-select]').select('Medium')
    cy.get('.game__cell--filled').should('have.length', 40)
    cy.get('[name=status__difficulty-select]').select('Hard')
    cy.get('.game__cell--filled').should('have.length', 30)
  })
})
