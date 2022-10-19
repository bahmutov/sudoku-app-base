/// <reference types="cypress" />
import React from 'react'
import './App.css'
import { Game } from './Game'
import { SudokuProvider } from './context/SudokuContext'
import { WinProvider, WinContext } from './context/WinContext'
import { starting, solved } from '../cypress/fixtures/sudoku.json'

describe('Game', () => {
  it('plays the game', () => {
    cy.mount(
      <SudokuProvider>
        <WinProvider>
          <Game initArray={starting} solvedArray={solved} />
        </WinProvider>
      </SudokuProvider>,
    )
    cy.get('.game__cell:not(.game__cell--filled)').should('have.length', 3)
    starting.forEach((cell, index) => {
      if (cell === '0') {
        cy.get('.game__cell').eq(index).click()
        cy.contains('.status__number', solved[index])
          .click()
          .wait(500, { log: false })
      }
    })

    cy.contains('.overlay__text', 'You solved it').should('be.visible')
  })
})
