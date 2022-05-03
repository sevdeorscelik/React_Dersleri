import React from "react";
import { useState, useEffect } from "react";
import List from './List'
import Form from "./Form";


function Contacts() {

    //kayitlarin eklenecegi state:
    const[contacts, setContacts] = useState([])

    useEffect(() => {
        console.log(contacts);
    },[contacts])


    return(
        <div>
           contacts 
           <List/>
           <Form addContact ={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts