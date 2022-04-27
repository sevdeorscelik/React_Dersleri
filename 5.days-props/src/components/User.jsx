import PropTypes from "prop-types";

function User(props) {
   // console.log(props.friends);
   console.log(props.address);
   
   //<p>{props.address.title}, {props.addres.zip}</p>  --> 15.satura gelmeli
    return (
        
        <div className="user">
            {props.isLoggedIn 
            ? 
            <div>
                <h1>My name is {props.name}</h1>
                <h2>I'm {props.age} years old. </h2>
                
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
    )
}

User.prototypes = {
    name: PropTypes.string.isRequired, // string olmasi zorunlu
    surname : PropTypes.string,
    isLoggedIn : PropTypes.bool,
    age : PropTypes.oneOfType([PropTypes.number, PropTypes.string]), //number da olur string de olur
    friends : PropTypes.array,
    /*
    address : PropTypes.shape({   //objectin icindeki bazilari number bazilari string olmaliysa
        title:PropTypes.string,
        zip : PropTypes.number,
    })
    */
}
export default User

//NEDEN ADDRESS PORP'U EKLEYEMEDIM. CALISMIYOR???