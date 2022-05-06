import { React } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



function Profile() {
    let navigate = useNavigate()
    let { username } = useParams()
  return (
  <div>
    This is a profil page for {username}
    <button onClick={()=>{
        navigate('/about')
    }}
    >
    {' '}
    Change to about page</button>
  </div>
  )
}



export default Profile
