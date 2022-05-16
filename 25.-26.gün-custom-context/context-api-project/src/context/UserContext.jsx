//giris yapmis kullanici ile ilgili bilgileri bu context'e tutacagiz

import { createContext, useState, useContext } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {

    /*const values = {
        id: 1,
        username: 'sevdersc',
        bio: 'lorem ipsum dolor'
    }*/
    /*
    const [user, setUser] = useState({
        id: 1,
        username: 'sevdersc',
        bio: 'lorem ipsum dolor'
    })
    */

    const [user, setUser] = useState(null)

    const values = {user, setUser}


    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
//custom context yapabilmek icin :
//export default UserContext


