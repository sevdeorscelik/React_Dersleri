import {useEffect, useState} from "react";
import axios from 'axios'

function Users() {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/users')
        //.then(resp => resp.json()) axios ile buna ihtiyac yok zaten json olarak veriyor
        //.then(usersData=> setUsers(usersData)) //bunun yerine söyle yazariz:
        .then(resp => setUsers(resp.data))
        .catch(err=> console.log(err))
        .finally(()=>setIsLoading(false)) //bunu yazma sebebimiz, loadin yazisi, data geldikten sonra kalksin diye
    },[])





    return(
        <div>
            <h1>Users</h1>

            {isLoading && <div>Loading...</div>}
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }

        </div>
    )
}

export default Users