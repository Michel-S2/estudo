"use client"
import { useUser } from "@/context/UserContext";
import { NameInput } from "./NameInput";
import { InputText } from "./InputText";
import { ChatMessages } from "./ChatMessages";

export const Chat = () => {
    //Context pra fazer a verificar se tem algo digitado
    const userCtx = useUser();

    //Se não tiver nada retornará null
    if (!userCtx) return null

    //Se não tiver nenhum usuário não irá pra proxima página
    if (!userCtx.user) return <NameInput/>

    return (
        <div className="border border-slate-600 rouded-md h-[700px] overflow-y-auto flex flex-col justify-between">
            <div className="p-2">
            {/* Componente para renderizar as mensagens na tela */}
                <ChatMessages/>
            </div>
            <div>
                <div className="border-t border-slate-600 h-11">
                {/* Componente para pegar o texto que o usuário digitará */}
                    <InputText name={userCtx.user}/>
                </div>
                <div className="border-t border-slate-600 h-11">
                {/* Componente para pegar o texto que o usuário digitará */}
                    <InputText name="Bot"/>
                </div>
            </div>
        </div>
    )
}