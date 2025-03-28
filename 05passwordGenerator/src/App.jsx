import { useCallback, useState } from 'react'

import './App.css'

function App()
{

  const [ length, setLength ] = useState( 8 )
  const [ numberAllowed, setNumberAllowed ] = useState( false );

  const [ charAllowed, setCharAllowed ] = useState( false )

  const [ password, setPassword ] = useState( "" )

  const passwordGenerator = useCallback( () =>
  {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopquerstuvwxyz"
    if ( numberAllowed ) str += "0123456789"
    if ( charAllowed ) str += "!@#$%^&*(){}|~<>?/\'`=-[],./"

    for ( let i = 1; i <= array.langth; i++ )
    {
      let char = Math.floor( Math.random() * str.length + 1 )

      pass = str.charAt( char )


    }
    setPassword( pass )

  }, [ length, setNumberAllowed, charAllowed, setPassword ] )
  {

  }


  return (
    <div>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>Amit Kumsr
        <h1 className='text-white text-center'>Password Genrator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
          />

        </div>
      </div>
    </div>
  )
}

export default App
