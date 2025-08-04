import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import CharacterSheet from './componentes/sheets/CharacterSheet'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>

      <CharacterSheet></CharacterSheet>

    </>
  )
}

export default App
