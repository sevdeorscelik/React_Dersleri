// 1. ADIM: theme'ya ulasmak icin önce useContext ve ThemeContext'i import ederiz
import { useContext } from 'react'
//import ThemeContext from '../context/ThemeContext'

import { useTheme } from '../context/ThemeContext'



function Header() {
//2. ADIM. Import edilen context'i useContext araciligi ile kullaniriz.
const {theme, setTheme} = useTheme() // burada istersek const data olarak da yazabilirdik.
    
    return (
        <div className='Header'>
            Header - Active theme: {theme}
        </div>
    )

}

export default Header
