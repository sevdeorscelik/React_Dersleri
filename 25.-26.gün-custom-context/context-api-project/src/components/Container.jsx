import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
import Button from './Button'
import Header from './Header'
import Profile from './Profile'


function Container() {

const {theme, setTheme} = useContext(ThemeContext)

    return (
        <div className={`Container ${theme === "dark" && "dark" }`}> 
            <Header />
            <Button />
            <hr />
            <Profile />
        </div>
    )

}

export default Container
