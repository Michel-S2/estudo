"use client"

import { useUser } from "@/context/UserContext";
import { useState } from "react"

export const NameInput = () => {
    //State pro usuário digitar o nome
    const [name, setName] = useState('');

    //Context para armazenar o nome digitado
    const userCtx = useUser();

    //Função para quando clicar uma tecla
    const handleUpKey = (event: React.KeyboardEvent<HTMLInputElement>) => {

        //Se a tecla clicada for enter
        if (event.code.toLowerCase() === 'enter') {
            if (name.toLowerCase().trim() !== '') {

                //Passamos o nome digitado para o context
                userCtx?.setUser(name);
            }
        }
    }

    //Funçao para quando clicar no botão
    const handleEnterName = () => {
        if (name.trim() !== '') {
            userCtx?.setUser(name);
        }
    }

    return (
        <div className="mt-13 flex gap-6 justify-center">
            <input 
                type="text"
                className="w-[50%] bg-slate-700 p-2 rounded-md"
                value={name}
                onChange={(event) => setName(event.target.value)}
                onKeyUp={handleUpKey}/>
            
            <button onClick={handleEnterName} className="bg-lime-800 rounded-md px-5">Entrar</button>
        </div>
    )
}