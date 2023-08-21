import React, { useReducer } from 'react'

const initialstate = 0;

const reducer = (state,action) => {
  console.log(state,action)

  if(action.type === 'Increment')
  {
      return state + 1;
  }

  if(action.type === 'Decrement')
  {
      return state - 1;
  }

  return state
}
function App() {

  const [state,dispatch] = useReducer(reducer,initialstate);
  return (
    <>
      <p>{state}</p>
      <button onClick={() => dispatch({type:'Increment'})}>Inc</button>
      <button onClick={() => dispatch({type:'Decrement'})}>Dec</button>
    </>
  )
}

export default App
