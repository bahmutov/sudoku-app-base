/// <reference types="cypress" />
describe('Timer', () => {
  it.only('shows 10 seconds', () => {
    // visit the base url
    // https://on.cypress.io/visit
    cy.clock()
    cy.visit('/')
    // cy.tick(60_000)
  })

  // confirm the timer shows "00:30" after 30 seconds
  // confirm the timer shows "11:40" after 700 seconds
  it('shows minutes and seconds since the game started', () => {
    // https://on.cypress.io/clock
    cy.clock()
    // https://on.cypress.io/visit
    cy.visit('/')
    // the timer should show "00:00"
    cy.contains('.status__time', '00:00')
    // advance the clock by 30 seconds
    // https://on.cypress.io/tick
    cy.tick(30_000)
    // the timer should show "00:30"
    cy.contains('.status__time', '00:30')
    // advance the clock by 30 seconds
    // the timer should show "10:00"
    cy.tick(30_000)
    cy.contains('.status__time', '01:00')
    // advance the clock by 640 seconds
    // the timer should show "11:40"
    cy.tick(640_000)
    cy.contains('.status__time', '11:40')
  })
})
