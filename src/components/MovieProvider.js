import React, { useState, createContext } from 'react'

//This ia all boilerplate to make context

//this is first step make provider
export const movieContext = createContext()

export function MovieProvider(props) {

  const [movies, setMovies] = useState([{
    name: "Fish Games",
    price: "12",
    id: 12598
  },
  {
    name: "Lost",
    price: "55.5",
    id: 1232487
  },
  {
    name: "Big Game",
    price: "98",
    id: 129348734
  }

  ])
  return (
    <movieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </movieContext.Provider>
  )
}
