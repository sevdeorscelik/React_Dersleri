import React from 'react'


const TechList = () => {
    const techs = ['HTML', 'CSS', 'JavaScript']

    return (
        <ul className='tech-list'>
            {techs.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
    )



};

export default TechList