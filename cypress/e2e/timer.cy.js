/// <reference types="cypress" />
describe('Timer', () => {
  it('shows 10 seconds', () => {
    cy.visit('/')
    for (let k = 0; k < 10; k++) {
      cy.contains('.status__time', `00:0${k}`)
    }
  })

  // confirm the timer shows "00:30" after 30 seconds
  // confirm the timer shows "11:40" after 700 seconds
  it('shows minutes and seconds since the game started', () => {
    cy.clock()
    cy.visit('/')
    cy.contains('.status__time', '00:00')
    cy.tick(30_000)
    cy.contains('.status__time', '00:30')
    cy.tick(30_000)
    cy.contains('.status__time', '01:00')
    cy.tick(640_000)
    cy.contains('.status__time', '11:40')
  })
})
