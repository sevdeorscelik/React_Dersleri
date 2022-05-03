import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Counter!</h1>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount((count) =>  count + 1)}>
      say
      </button>
    </div>
  )
}

export default App


//inspect -> 3 nokta -> more tools -> Rendering -> select Paint flashing
