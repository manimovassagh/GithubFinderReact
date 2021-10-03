import React ,{useReducer} from 'react'
import {MovieUser} from './MovieUser'

const initialState=0
const reducer =(state,action)=>{
  switch (action) {
    case "INCREMENT":
      return state+1
      case "DECREMENT":
      return state-1
      case "RESET":
      return initialState
     default:
     return state
  }
}
export function Counter() {
  const[count,dispatch]=useReducer(reducer,initialState)
  return (
    <div className="ui items  " style={{textAlign:"center"}}>
    <div  className="middle aligned content">
    <div >{count}</div>
      <button onClick={()=>dispatch("INCREMENT")} >Increment</button>
      <button onClick={()=>dispatch("DECREMENT")}>Decrement</button>
      <button onClick={()=>dispatch("RESET")}>Reset</button>
    </div>
    <MovieUser/>
    </div>
  )
}


