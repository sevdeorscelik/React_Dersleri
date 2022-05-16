//import ThemeContext from '../context/ThemeContext'
import { useTheme } from '../context/ThemeContext'
import Button from './Button'
import Header from './Header'
import Profile from './Profile'


function Container() {

//const {theme, setTheme} = useContext(ThemeContext)
const {theme, setTheme} = useTheme()


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
