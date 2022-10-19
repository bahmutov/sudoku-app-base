/// <reference types="cypress" />
import React from 'react'
import { Overlay } from './Overlay'
import '../App.css'

describe('Overlay', () => {
  it('is invisible', () => {
    cy.mount(<Overlay />)
    cy.get('.overlay').should('not.be.visible')
  })

  it('is visible and clickable', () => {
    // confirm that clicking on the overlay
    // calls the stub "@click" once
    cy.mount(<Overlay overlay={true} onClickOverlay={cy.stub().as('click')} />)
    cy.get('.overlay').should('be.visible').click()
    cy.get('@click').should('have.been.called')
  })

  it('shows the loading element', () => {
    // stub the "GET /times/90" route
    // and return an empty array
    // and status code 404
    // delay the response by 1 second
    // https://on.cypress.io/intercept
    cy.intercept('GET', '/times/90', {
      delay: 1000,
      statusCode: 404,
      body: [],
    })
    // mount the Overlay component
    // with overlay: true and time: 90 seconds
    cy.mount(<Overlay overlay={true} time={90} />)
    // confirm the loading element is shown
    // and then it goes away
    cy.contains('.overlay__loading', 'Loading').should('be.visible')
    cy.get('.overlay__loading').should('not.exist')
  })

  it('shows the top times', () => {
    // intercept the "GET /times/90" call and respond
    // with the fixture "times.json"
    // https://on.cypress.io/intercept
    cy.intercept('GET', '/times/90', {
      fixture: 'times.json',
    })
      // give the intercept alias "scores"
      // https://on.cypress.io/as
      .as('scores')
    // mount the Overlay component
    // with overlay: true and time: 90 seconds
    cy.mount(<Overlay overlay={true} time={90} />)
    // make sure the intercept was used
    cy.wait('@scores')
    // confirm the number of timing scores shown
    cy.get('.overlay__times li').should('have.length', 4)
    // confirm the 90 second timing is the current timing
    cy.contains('.overlay__times li', '01:30').should(
      'have.class',
      'overlay__current',
    )
  })
})
