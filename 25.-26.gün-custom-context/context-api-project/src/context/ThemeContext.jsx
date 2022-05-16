import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext()



export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light') // localStorage'de bir sey yoksa light olsun anlamina gelir

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    const values = {
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