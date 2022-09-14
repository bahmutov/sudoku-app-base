import React from 'react'
import { Game } from './Game'
import './App.css'
import { SudokuProvider } from './context/SudokuContext'
import { WinProvider } from './context/WinContext'

/**
 * App is the root React component.
 */
export const App = () => {
  return (
    <SudokuProvider>
      <WinProvider>
        <Game />
      </WinProvider>
    </SudokuProvider>
  )
}
