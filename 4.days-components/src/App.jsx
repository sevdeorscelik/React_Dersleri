import { React } from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.scss'



function App() {

  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}



export default App