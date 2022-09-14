/// <reference types="cypress" />
import React from 'react'
import { StatusSection } from './StatusSection'
import '../../App.css'

describe('StatusSection', () => {
  it('changes modes', () => {
    cy.mount(
      <div className="innercontainer" style={{ paddingTop: '30px' }}>
        <StatusSection />
      </div>,
    )

    cy.get('.status__action-mistakes-mode input').should('not.be.checked')
    cy.get('.status__action-mistakes-mode').click()
    cy.get('.status__action-mistakes-mode input').should('be.checked')

    cy.get('.status__action-fast-mode input').should('not.be.checked')
    cy.get('.status__action-fast-mode').click()
    cy.get('.status__action-fast-mode input')
      .should('be.checked')
      .wait(1000, { log: false })

    cy.screenshot('StatusSection - 1', { overwrite: true })
    cy.viewport(290, 500)
    cy.screenshot('StatusSection - 2', { overwrite: true })
  })
})
