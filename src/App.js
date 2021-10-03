import './App.css';
import React from 'react'
import {MenuBase} from './components/Menu';
import {Counter} from "./components/Counter"
import { countStoreContext } from './components/ContetxStore';
import {name} from "./components/ContetxStore"
export default function App() {
  return (
<countStoreContext.Provider name={name}>
    <div>
           <MenuBase/>
           <Counter/>
    </div>
    </countStoreContext.Provider>
  )
}



