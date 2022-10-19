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
        <WinProvider></WinProvider>
      </SudokuProvider>,
    )
    // there should be three unfilled cells
    // take every unfilled cell in the array and fill it
    // with the solution
    //
    // then the overlay "You solved it" should be visible
  })
})
