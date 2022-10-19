/// <reference types="cypress" />
describe('Hint', () => {
  it('fills each empty cell', () => {
    // visit the base URL
    cy.visit('/')
    cy.get('.game__cell--filled').should('have.length', 45)
    cy.get('.game__cell:not(.game__cell--filled)')
      .should('have.length', 36)
      .each(($cell) => {
        cy.wrap($cell, { log: false }).click({ log: false })
        cy.get('.status__action-hint').click()
      })

    cy.contains('.overlay__text', 'You solved it').should('be.visible')
  })
})
