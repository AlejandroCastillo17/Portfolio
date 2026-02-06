import { useState } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/maincontent'
import "../src/App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='app'>
      <Sidebar />
      <MainContent />
    </div>
    </>
  )
}

export default App
