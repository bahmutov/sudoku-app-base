/// <reference types="cypress" />
import React from 'react'
import './App.css'
import * as UniqueSudoku from './solver/UniqueSudoku'
import { starting, solved } from '../cypress/fixtures/sudoku.json'
import { App } from './App'

it('stubs the ES6 import', () => {
  cy.stub(UniqueSudoku, 'getUniqueSudoku').returns([starting, solved])
  cy.mount(<App />)
  // there should be 3 unfilled cells
  cy.get('.game__cell:contains(0)').should('have.length', 3)
})
