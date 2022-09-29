import { React } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



function Profile() {
    let navigate = useNavigate()
    let { username } = useParams()
  return (
  <div>
    This is a profil page for {username}

    <button onClick={()=>{
        navigate('/home')
    }}
    >
    {' '}
    back to home</button>
  </div>
  )
}



export default Profile
