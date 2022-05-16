import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'


function Button() {

    const data = useContext(ThemeContext) //const {theme, setTheme} = useContext(ThemeContext) seklinde de yazabiliriz. bu sekilde yazarsak her seferinde data.theme degil direkt theme yada setTheme yazabrak kullanabiliriz
    console.log(data);

    
    return (
        <div className='Button'>
            <div>
                Button- Active theme : {data.theme}
            </div>
            <button onClick={()=> data.setTheme( data.theme === "light" ? "dark" : "light" )}>Change Theme</button>
           
        </div>
    )

}

export default Button
