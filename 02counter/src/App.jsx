import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App()
{

  let [ counter, setCounter ] = useState( 15 );
  // let counter = 15;
  const addValue = () =>
  {
    // counter = counter + 1;



    setCounter( prevCounter => prevCounter + 1 )
    setCounter( prevCounter => prevCounter + 1 )
    setCounter( prevCounter => prevCounter + 1 )
    setCounter( prevCounter => prevCounter + 1 )
    console.log( counter );


  }

  const RemoveValue = () =>
  {
    counter = counter - 1;
    setCounter( counter )
    console.log( counter );


  }
  return (
    <>

      <h1>Amit kumar | React Project</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <button onClick={RemoveValue}>Removed Value{counter}</button>
      <p>Footer{counter}</p>
    </>
  )
}

export default App
