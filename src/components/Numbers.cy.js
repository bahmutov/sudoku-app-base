/// <reference types="cypress" />
import React from 'react'
import { Numbers } from './Numbers'
import '../App.css'
import { SudokuContext } from '../context/SudokuContext'

describe('Numbers', { viewportHeight: 1000, viewportWidth: 1000 }, () => {
  it('shows numbers', () => {
    cy.mount(
      <div className="innercontainer">
        <section className="status">
          <Numbers />
        </section>
      </div>,
    )
    // confirm there are 9 numbers
    cy.get('.status__number').should('have.length', 9)
  })

  it('calls on click number', () => {
    cy.mount(
      <div className="innercontainer">
        <section className="status">
          <Numbers onClickNumber={cy.stub().as('click')} />
        </section>
      </div>,
    )
    // click the number "1"
    // https://on.cypress.io/contains
    // https://on.cypress.io/click
    cy.contains('.status__number', '1').click()
    // confirm the stub "@click" was called once
    // https://glebbahmutov.com/cypress-examples/commands/spies-stubs-clocks.html
    cy.get('@click').should('have.been.calledOnceWith', '1')
  })

  it('shows the selected number', () => {
    cy.mount(
      <SudokuContext.Provider value={{ numberSelected: '8' }}>
        <div className="innercontainer">
          <section className="status">
            <Numbers onClickNumber={cy.stub().as('click')} />
          </section>
        </div>
      </SudokuContext.Provider>,
    )

    // confirm the number "8" has the expected class
    // that shows it as selected
    // https://glebbahmutov.com/cypress-examples/commands/assertions.html
    cy.contains('.status__number', '8').should(
      'have.class',
      'status__number--selected',
    )
  })
})
