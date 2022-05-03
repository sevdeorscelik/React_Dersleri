import {React, useState, useEffect} from "react";

const resetFormValues = {fullname:'', phone_number:''}


const Form = ({addContact,  contacts}) => {

//console.log(addContact);

    const[form, setForm] = useState({fullname:'', phone_number:''})

    useEffect(()=>{  // contacts componenti degistiginde input temizlemenin 3. yolu.
        setForm(resetFormValues)
    },[contacts])

    const onChangeInput = (e) => {
        setForm({ 
            ...form, 
            [e.target.name]: e.target.value 
        })
    };

    const onSubmit = (e) => {
        e.preventDefault()

        if(form.fullname === '' || form.phone_number === ''){
            return false;
        }

        addContact([...contacts,form])
        //setForm({fullname:'', phone_number:''}) //butona tikladiktan sonra inputlari bosaltmak icin 1. yol
        //setForm(resetFormValues) //zeile 10. Bu sekilde brden fazla inputu daha kolay yazariz. 2.yol

    }



    return (
        <form onClick={onSubmit}>

            <div>
                <input 
                    name="fullname" 
                    placeholder="Fullname..." 
                    value={form.fullname}
                    onChange={onChangeInput}
                />
            </div>
            <div>
                <input
                    name="phone_number" 
                    placeholder="Phone Number..." 
                    onChange={onChangeInput}
                    value={form.phone_number}
                />
            </div>
            <div>
                <button >Add</button>
            </div>

        </form>
    )
};

export default Form