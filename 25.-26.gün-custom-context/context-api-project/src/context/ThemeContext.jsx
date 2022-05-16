import { createContext, useState } from "react";

const ThemeContext = createContext()



export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('dark')
    
    const values  = {
        theme,
        setTheme
    }

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

//daha okunabilir olsun diye themeContext.Provider'i buraya aldik ve app.js'deki verileri children araciligi ile buraya aktardik

export default ThemeContext