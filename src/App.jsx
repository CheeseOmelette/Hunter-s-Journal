import { useState } from 'react'
import Header from './components/Header.jsx'
import './App.css'
import JournalBody from './components/JournalBody.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <JournalBody/>
    </div>
  )
}

export default App
