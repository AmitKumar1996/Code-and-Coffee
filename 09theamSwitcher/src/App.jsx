import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/theme'

function App()
{
  const [ count, setCount ] = useState( 0 )

  return (
    <ThemeProvider>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/*Theam Button */}
          </div>

          <div className="w-full max-w-sm mx-auto">
            { /* Card*/}
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
