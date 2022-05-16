  
import './App.css'
import Container from './components/Container'

import {ThemeProvider} from './context/ThemeContext'


function App() {

  return (
    <div className="App">
      <ThemeProvider>
       <Container />
      </ThemeProvider>
    </div>
  )

}

export default App
