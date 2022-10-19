/// <reference types="cypress" />
import React from 'react'
import { Difficulty } from './Difficulty'
import '../App.css'
import { SudokuContext } from '../context/SudokuContext'

describe('Difficulty', () => {
  it('changes the difficulty level', () => {
    cy.mount(
      <SudokuContext.Provider value={{ difficulty: 'Easy' }}>
        <div className="innercontainer">
          <section className="status">
            <Difficulty onChange={cy.stub().as('change')} />
          </section>
        </div>
      </SudokuContext.Provider>,
    )
    // act on the component's UI
    // change the difficulty to Medium
    // confirm the stub "@change" was called once
    // with expected argument
    // https://glebbahmutov.com/cypress-examples/commands/spies-stubs-clocks.html
    cy.get('select').should('have.value', 'Easy').select('Medium')
    cy.get('select').should('have.value', 'Medium')
    cy.get('@change')
      .should('have.been.calledOnce')
      .its('firstCall.args.0.target.value')
      .then(console.log)
      .should('equal', 'Medium')
  })
})
