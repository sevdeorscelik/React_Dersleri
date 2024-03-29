import { useState } from "react"
import { useUser } from "../context/UserContext";


const Profile = () => {

    //const data = useContext(UserContext)
    //console.log(data);

    //const { user, setUser } = useContext(UserContext)
    const { user, setUser } = useUser()


    const handleLogin = () => {
        setUser({
            id: 1,
            username: 'sevdersc',
            bio: 'lorem ipsum dolor'
        })

        setLogin('Logout')
    }

    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            {
                !user ? (
                    <button onClick={handleLogin} > Login </button>
                )
            
            :
                user && (
                    <button onClick={handleLogout} > Logout </button>
                )
            }

            <br /><br />

            <code>
                user: {JSON.stringify(user)}
            </code>

        </div>
    )
};

export default Profile;
