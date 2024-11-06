import {useState} from 'react'
export const ManageData = () => {
    const [number, setNumber] = useState(0);
    let someData = 10;
    return (
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar numero</button>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>Mudar o state</button>
        </div>
    )
}