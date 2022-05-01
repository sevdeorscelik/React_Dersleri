import { useState } from 'react'
import './App.css'

function App() {

  const[name, setName] = useState('Sevde'); //state#in varsayilan degeri sevde olur
  const[age, setAge] = useState('27')

  const changeName = () => {
    setName('Semih')
    setAge('29')
  }

 

  return (
    <div className="App">
     <h1>Merhabalar {name} ! </h1>
     <h2> {age} </h2>
     <button onClick={changeName} >Change</button>
    </div>
  )
}

export default App
