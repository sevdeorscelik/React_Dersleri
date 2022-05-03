import { useState } from 'react'
import './App.css'

function App() {
  const catsUrl = 'http://wuerzburgerstern.de/wp-content/uploads/MG_2967.jpg'
  const dogsUrl = 'https://www.petmd.com/sites/default/files/2020-11/picture-of-golden-retriever-dog_0.jpg'

const[imgUrl, setImgUrl] = useState(catsUrl)

  const changePhoto = () => {
    
    let image = imgUrl === catsUrl ? dogsUrl : catsUrl
    setImgUrl(image)
  }

  return (
    <div className="App">
      <div>
        <img src={imgUrl} height='500px' ></img>
      </div>
      <button onClick={changePhoto}>Change</button>
    </div>
  )
}

export default App
