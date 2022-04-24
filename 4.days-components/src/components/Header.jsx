import React from 'react'


const title = 'Welcome to 30 Days Of React'

export const author = {
  firstName: 'Sevde',
  lastName: 'Örscelik',
}

const Header = () => {
    return (
        <header>
            <div className='header-div'>
                <h1>{title}</h1>
                <h2>Getting Started React</h2>
                <h3>JavaScript Library</h3>
                <p>{author.firstName} {author.lastName}</p>
                <small>Apr 23, 2022</small>
            </div>
        </header>
    )
};

export default Header
