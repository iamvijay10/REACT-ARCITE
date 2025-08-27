
import './App.css'
import Greeting from './Components/Greeting'

function App() {
  
  let name="GOAT"
  let greatest="messi"

  return (
    <>
      <Greeting name={name} greatest={greatest}/>
    </>
  )
}

export default App
