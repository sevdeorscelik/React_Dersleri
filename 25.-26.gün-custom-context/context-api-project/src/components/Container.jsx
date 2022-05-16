import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
import Button from './Button'
import Header from './Header'



function Container() {

const {theme, setTheme} = useContext(ThemeContext)

    return (
        <div className={`Container ${theme === "dark" && "dark" }`}> 
            <Header />
            <Button />
        </div>
    )

}

export default Container
