/// <reference types="cypress" />
import React from 'react'
import { Timer, formatTime } from './Timer'
import '../App.css'
import { SudokuProvider, SudokuContext } from '../context/SudokuContext'
import moment from 'moment'

describe('Timer', () => {
  it('sets the clock to the given value', () => {
    const now = moment()
    const future = now.clone().add(700, 'seconds')
    cy.clock(future.toDate())

    cy.mount(
      <SudokuContext.Provider value={{ timeGameStarted: now }}>
        <section className="status">
          <Timer />
        </section>
      </SudokuContext.Provider>,
    )
    cy.contains('11:40')
  })

  it('formats the time', { viewportHeight: 200, viewportWidth: 300 }, () => {
    expect(formatTime({})).to.equal('00:00')
    expect(formatTime({ seconds: 3 })).to.equal('00:03')
    expect(formatTime({ minutes: 55, seconds: 3 })).to.equal('55:03')
    expect(formatTime({ hours: 110, minutes: 55, seconds: 3 })).to.equal(
      '110:55:03',
    )
    cy.document().invoke(
      'write',
      formatTime({ hours: 110, minutes: 55, seconds: 3 }),
    )
    cy.document().invoke(
      'write',
      formatTime({ hours: 110, minutes: 5, seconds: 63 }),
    )
  })
})
