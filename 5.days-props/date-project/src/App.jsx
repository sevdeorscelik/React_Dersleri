import { useState } from 'react'
import { Button } from './components/Button'
import { showDate } from './components/ShowDate'
import './App.css'

function App() {
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  const handleTime = () => {
    alert(showDate(new Date()))
  }

  return (
    <div className="App">
      <Button text='Greet People' onClick={greetPeople} />
      <Button text='Show Time' onClick={handleTime} />
    </div>
  )
}

export default App
