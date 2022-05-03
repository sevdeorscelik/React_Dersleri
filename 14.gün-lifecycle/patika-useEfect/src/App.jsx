import { useState, useEffect } from 'react'
import './App.css'
import Counter from './component/Counter'

function App() {

  const[number, setNumber] = useState(0)
  const[name, setName] = useState('Sevde')

  //useEffect(()=> {
  // console.log('state güncellendi'); //comp üzerinde her state güncellemesinde calisir
  // })

  //useEffect(()=> {
  //  console.log('component mount edildi!'); //sayfa yenilendiginde
  //}, [])

  //useEffect(()=> {
  //  console.log('number state güncellendi!'); //sadece number state güncellenince 
//}, [number])

  const[isVisible, setIsVisible] = useState(true)

  

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={()=> setNumber(number+1)} >Click !</button>

      <hr />

      <h1>{name}</h1>
      <button onClick={()=>setName('Semih')} >Click !</button>

      <hr />

      {isVisible && <Counter/>}
      <br />
      <button onClick={() => setIsVisible(!isVisible)}>toggle-counter</button>

    </div>
  )
}

export default App
