/// <reference types="cypress" />
import React from 'react'
import { Timer, formatTime } from './Timer'
// import '../App.css'
import { SudokuContext } from '../context/SudokuContext'
import moment from 'moment'

describe('Timer', () => {
  it.only('sets the clock to the given value', () => {
    // get the current clock and compute 700 seconds into the future
    const now = moment()
    const future = now.clone().add(700, 'seconds')
    // set the application clock into the future
    cy.clock(future.toDate())

    // mount the Timer
    cy.mount(
      <SudokuContext.Provider value={{ timeGameStarted: now }}>
        <section className="status">
          <Timer />
        </section>
      </SudokuContext.Provider>,
    )
    // surrounded by the context provider with
    // value={{ timeGameStarted: now }}
    // and a section with class "status"
    //
    // confirm the timer shows "11:40"
    cy.contains('.status__time', '11:40')
    // cy.screenshot('status-timer', { overwrite: true })
  })

  it.skip(
    'formats the time',
    { viewportHeight: 200, viewportWidth: 300 },
    () => {
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
      // cy.document().invoke(
      //   'write',
      //   formatTime({ hours: 110, minutes: 5, seconds: 63 }),
      // )
    },
  )
})
