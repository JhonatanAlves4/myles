import React, { useState, createContext } from 'react'

export const UserContext = createContext({})

export const UserProvider = (props:any) => {
  const [isSigned, setIsSigned] = useState(false)
  return (
    <UserContext.Provider value={{ isSigned, setIsSigned }}>
      {props.children}
    </UserContext.Provider>
  )
}