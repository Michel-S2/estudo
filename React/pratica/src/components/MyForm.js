import { useState } from 'react'
import './MyForm.css'

export const MyForm = ({user}) => {
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [sobre, setSobre] = useState(user ? user.sobre : '');
    const [conta, setConta] = useState(user ? user.conta : '');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (name === '' || email === '') return false
        console.log('Eviando Formulário...')
        console.log(name, email, sobre, conta)

        setName('');
        setEmail('');
        setSobre('');
    }

    return (
        <div>
            <h2>Formulário de {name}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Digite seu nome" 
                    onChange={handleName}
                    value={name}/>
                </div>

                <label>
                    <span>E-mail</span>
                    <input 
                    type="email" 
                    placeholder='Digite seu email' 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}/>
                </label>

                <label>
                    <span>Sobre</span>
                    <textarea
                    onChange={(e) => setSobre(e.target.value)} 
                    name="sobre"
                    value={sobre}></textarea>
                </label>
                <label>
                    <span>Conta do sistema</span>
                    <select 
                    name="role" 
                    value={conta}
                    onChange={(e) => setConta(e.target.value)}>
                        <option value="admin">Administrador</option>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                    </select>
                    
                </label>

                <input type="submit" value='Enviar' />
            </form>
        </div>
    )
}