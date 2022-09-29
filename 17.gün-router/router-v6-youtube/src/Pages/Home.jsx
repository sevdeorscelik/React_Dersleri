import { React } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



function Home() {
  let navigate = useNavigate()


  return (
    <div>
      This is a home page
      <br />
      <button onClick={() => {
        navigate('/profile/:sevde')
      }}>to Sevde</button>

      <button onClick={() => {
        navigate('/profile/:semih')
      }}>to Semih</button>
    </div>
  )
}



export default Home
