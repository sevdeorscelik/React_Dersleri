

function User(props) {
    console.log(props.friends);
    return [
        <div className="user">
            {props.isLoggedIn 
            ? 
            <div>
                <h1>My name ist {props.name}</h1>
                <ul >
                {props.friends.map((friend, index) => (
                    
                        <li key={index}>
                            {friend}
                        </li>
                    
                ))}
                </ul>
                
                </div>
            :
                <h1>Bitte anmelden Sie!</h1> 
            } 
        </div>
    ]
}
export default User