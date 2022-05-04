import React from "react";
import { useState } from "react";

const List = ({ contacts }) => {

    const [filterText, setFilterText] = useState('')
    const [toggle, setToggle] = useState(false)

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase());
        })
    })

    const showNumber = (e) => {
        setToggle(!toggle)
    }



    return (
        <div>
            <input
                placeholder="Filter contact"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />
            <ul className="list">
                {
                    filtered.map((contact, index) => (
                        <li key={index} onClick={showNumber} >
                            {contact.fullname} 
                            {toggle && ` - ${contact.phone_number}`
                            }
                        </li>

                    ))
                }

            </ul>
            <p className="total">Total contacts : ( {filtered.length} )</p>
        </div>
    )
};

export default List