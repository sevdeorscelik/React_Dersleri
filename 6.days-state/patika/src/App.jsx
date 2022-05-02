import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState('Sevde'); //state#in varsayilan degeri sevde olur
  const [age, setAge] = useState(27)
  const [friends, setFriends] = useState(['zeynep', 'kübra'])
  const [address, setAddress] = useState({city:'izmir', zip:12345})

  const changeName = () => {
    setName('Semih')
    setAge(29)
    setFriends([...friends, 'seyma'])
    setAddress({...address, title:'title'})
  }


  return (
    <div className="App">
      <h1>Merhabalar {name} ! </h1>
      <h2> {age} </h2>
      {friends.map(friend => <p> {friend} </p>)}
      <p>{address.city} + {address.zip}</p>
      <button onClick={changeName} >Change</button>
    </div>
  )
}

export default App
