import React from 'react'

import sevdeImage from '../images/sevde.jpeg'

const UserCard = () => {
    return (
        <div className='user-card'>
            <img src={sevdeImage} alt='sevde image' height={'400px'}/>
            <h2>Sevde Örscelik</h2>
        </div>
    )
};

export default UserCard