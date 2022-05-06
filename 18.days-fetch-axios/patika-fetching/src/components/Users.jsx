import {useEffect, useState} from "react";

function Users() {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(usersData=> setUsers(usersData)) 
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