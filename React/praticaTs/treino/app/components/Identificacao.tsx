import { useState } from "react";
import { useTema } from "../context/TemaContext";

type Props = {
    nextPage: () => void
}


export const Identificacao = ({nextPage}: Props) => {
    const [user, setUser] = useState<string>('');
    const [userValid, setUserValid] = useState<string>('');
    const useValidCtx = useTema();

    const definirNome = () => {
        if (user.trim() === '') return
    
        useValidCtx?.setUserValid(user);
        nextPage();
    }

    return (
        <div className="flex flex-col justify-center items-center">
           <div>
                <h2 className="text-2xl mb-3">Qual seu Nome</h2>
                <input 
                    type="text" 
                    className="w-72 px-3 py-3 text-white bg-zinc-800 rounded-md outline-none"
                    onChange={(i) => setUser(i.target.value)}
                    value={user}/>
                <button className="border border-slate-700 rounded-md ml-5 px-6 py-3 bg-zinc-800"  onClick={definirNome}>Iniciar Chat</button>
           </div>
        </div>
    )
}