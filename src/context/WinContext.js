import React, { createContext, useContext, useState } from 'react'

export const WinContext = createContext([false, () => {}]) // win flag

export const WinProvider = ({ children }) => {
  let [won, setWon] = useState(false)

  return (
    <WinContext.Provider
      value={{
        won,
        setWon,
      }}
    >
      {children}
    </WinContext.Provider>
  )
}

export const useWinContext = () => useContext(WinContext)
