import './App.css';
import React from 'react'
import { MenuBase } from './components/Menu';
import { Counter } from "./components/Counter"
import { MovieProvider } from './components/MovieProvider';




export default function App() {
  return (
    <MovieProvider >
      <MenuBase />
      <Counter />
    </MovieProvider>
  )
}



