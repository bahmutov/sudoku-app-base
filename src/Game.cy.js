/// <reference types="cypress" />
import React from 'react'
import './App.css'
import { Game } from './Game'
import { SudokuProvider } from './context/SudokuContext'
import { WinProvider, WinContext } from './context/WinContext'
import { starting, solved } from '../cypress/fixtures/sudoku.json'

describe('Game', () => {
  it('plays the game', () => {
    // mount the component with the starting and solved arrays
    cy.mount(
      <SudokuProvider>
        <WinProvider>
          <Game initArray={starting} solvedArray={solved} />
        </WinProvider>
      </SudokuProvider>,
    )
    // there should be three unfilled cells
    cy.get('.game__cell:not(.game__cell--filled)').should('have.length', 3)

    cy.intercept('GET', '/times/*', {
      fixture: 'times.json',
    }).as('load')

    // take every unfilled cell in the array and fill it
    // with the solution
    cy.get('.game__cell').eq(0).click()
    cy.contains('.status__number', '1').click()
    cy.get('.game__cell').eq(1).click()
    cy.contains('.status__number', '4').click()
    cy.get('.game__cell').eq(2).click()
    cy.contains('.status__number', '5').click()
    //
    // then the overlay "You solved it" should be visible
    cy.contains('You solved it').should('be.visible')
    cy.wait('@load')
  })
})
