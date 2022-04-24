import React from 'react'
import {author} from './Header'

import sevdeImage from '../images/sevde.jpeg'

const buttonStyles = {
    padding: '10px 20px',
    background: 'yellowgreen',
    border: 'none',
    borderRadius: 5,
  }

const UserCard = () => {
    return (
        <div className='user-card'>
            <img src={sevdeImage} alt='sevde image' height={'400px'}/>
            <h2>{author.firstName}</h2>
            <button style={buttonStyles}> Button </button>
        </div>
    )
};

export default UserCard