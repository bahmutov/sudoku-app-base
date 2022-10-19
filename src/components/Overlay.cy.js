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
    cy.mount(<Overlay overlay={true} onClickOverlay={cy.stub().as('click')} />)
    // confirm that clicking on the overlay
    // calls the stub "@click" once
  })

  it('shows the loading element', () => {
    // stub the "GET /times/90" route
    // and return an empty array
    // and status code 404
    // delay the response by 1 second
    // https://on.cypress.io/intercept
    //
    // mount the Overlay component
    // with overlay: true and time: 90 seconds
    //
    // confirm the loading element is shown
    // and then it goes away
  })

  it('shows the top times', () => {
    // intercept the "GET /times/90" call and respond
    // with the fixture "times.json"
    // https://on.cypress.io/intercept
    //
    // give the intercept alias "scores"
    // https://on.cypress.io/as
    //
    // mount the Overlay component
    // with overlay: true and time: 90 seconds
    //
    // make sure the intercept was used
    // https://on.cypress.io/wait
    //
    // confirm the number of timing scores shown
    //
    // confirm the 90 second timing is the current timing
  })
})
