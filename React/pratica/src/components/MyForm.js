import { useState } from 'react'
import './MyForm.css'

export const MyForm = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <h2>Formulário de {name}</h2>
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Digite seu nome" 
                    onChange={handleName}/>
                </div>

                <label>
                    <span>E-mail</span>
                    <input 
                    type="email" 
                    placeholder='Digite seu email' 
                    onChange={(e) => setEmail(e.target.value)}/>
                </label>

                <input type="submit" value='Enviar' />
            </form>
        </div>
    )
}