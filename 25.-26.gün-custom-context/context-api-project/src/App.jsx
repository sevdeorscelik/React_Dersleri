import { useState } from 'react'
import './App.css'
import ThemeContext from './context/ThemeContext'
import Button from './components/Button'

import {ThemeProvider} from './context/ThemeContext'


function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <Button></Button>
      </ThemeProvider>
    </div>
  )

}

export default App
