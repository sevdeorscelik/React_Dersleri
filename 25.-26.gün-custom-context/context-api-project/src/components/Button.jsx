import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'


function Button() {

    const data = useContext(ThemeContext)
    console.log(data);
    return (
        <div className='Button'>
            <div>
                Button - {data}
            </div>
           
        </div>
    )

}

export default Button
