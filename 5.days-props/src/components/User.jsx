

function User(props) {
    return [
        <div className="user">
            <h1>
                {props.isLoggedIn ? `${props.name} ${props.surname}` : 'Bitte Login'  }
            </h1>
            
        </div>
    ]
}
export default User