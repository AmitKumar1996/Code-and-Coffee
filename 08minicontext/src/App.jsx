
import './App.css'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'

function App()
{
  const [ count, setCount ] = useState( 0 )

  return (
    <UserContextProvider>
      <h1>Amit Context</h1>
    </UserContextProvider>
  )
}

export default App
