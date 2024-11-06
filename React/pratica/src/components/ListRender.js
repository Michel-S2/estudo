import React, { useState } from 'react'

export const ListRender = () => {
    const [list, setList] = useState(['Matheus', 'Pedro', 'José', 'Maria']);

    const [users, setUsers] = useState([
        {id: 1, name: 'Matheus', age: 25},
        {id: 2, name: 'Maria', age: 21},
        {id: 3, name: 'Pedro', age: 29}
    ])

    const handleDeleteButton = () => {
        const randomNumber = Math.floor(Math.random() * users.length);
        console.log(randomNumber)
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }
  return (
    <div>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        <button onClick={handleDeleteButton}>Deletar aleatorio</button>
    </div>
  )
}
