import { useState, useEffect } from "react"

function Counter() {

    const [no, setNo] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => {
            setNo((n) => n + 1) //neden ikiser tane ariyor
        }, 1000);
        return () => clearInterval(interval) // böylece toggle ile kapattigimizda sayi durur

    }, [no])

    useEffect(()=>{
        console.log('birseyler oldu');
    },[no])





    const countShow = () => {
        setIsVisible(!false)
    }


    return (
        <>
            <h1>{no}</h1>

        </>
    )
}

export default Counter