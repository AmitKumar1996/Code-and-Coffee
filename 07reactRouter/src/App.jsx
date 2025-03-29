import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App()
{
  const [ count, setCount ] = useState( 0 )

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center">
        <h1 className="bg-green-600 p-4 text-white w-full text-center">React Router</h1>
      </div>
    </>
  )
}

export default App
