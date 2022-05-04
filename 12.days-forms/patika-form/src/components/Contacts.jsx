import React from "react";
import { useState, useEffect } from "react";
import List from './List'
import Form from "./Form";


function Contacts() {

    //kayitlarin eklenecegi state:
    const[contacts, setContacts] = useState([
        {
            fullname:'Sevde',
            phone_number:'123123'
        },{
            fullname:'Ayse',
            phone_number:'456456'
        },{
            fullname:'Ali',
            phone_number:'789789'
        }
    ])

    useEffect(() => {
        console.log(contacts);
    },[contacts])


    return(
        <div>
           contacts 
           <List contacts={contacts} />
           <Form addContact ={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts