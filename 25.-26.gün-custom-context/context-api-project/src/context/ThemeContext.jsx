import { Children, createContext } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    return (
        <ThemeContext.Provider value="dark">
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContext