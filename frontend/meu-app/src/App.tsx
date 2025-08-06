import { useState } from 'react'
import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import CharacterSheet from './componentes/sheets/CharacterSheet'
import Join from './componentes/Join/Join'
import Chat from './componentes/Chat/Chat'


function App() {
  const [chatVisibility, setChatVisibility] = useState(false)

  return (
    <>
    <div className='App'>
        <Navbar></Navbar>
          { 
          chatVisibility?  <Chat></Chat>:<Join setChatVisibility={setChatVisibility}></Join>
          } 
    </div>
      

    </>
  )
}

export default App
