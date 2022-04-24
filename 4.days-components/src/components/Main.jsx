import React from 'react'

import UserCard from './UserCard'
import TechList from './TechList'


const Main = () => {
    return (
        <main>
            <div className='main-wrapper'>
                <p>React.s'e baslamak icin önkosullar sunlardir:</p>
                <TechList />
                <UserCard />
            </div>
        </main>
    )
};

export default Main