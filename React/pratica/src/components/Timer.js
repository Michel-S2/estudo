import { useEffect, useState } from "react"

export const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;

        if(isActive) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1)
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div>
            <h2>Timer: {seconds}</h2>
            <button onClick={() => setIsActive(true)}>Iniciar</button>
            <button onClick={() => setIsActive(false)}>Pausar</button>
            <button onClick={() => {setIsActive(false); setSeconds(0)}}>Parar</button>
            {!isActive && seconds !== 0 ? (<h3>Timer Pausado</h3>) : (<h3></h3>)}
        </div>
    )
}