
import { Message } from "@/types/Message";

// Type para adicionar mensagem
type AddAction = {
    type: 'add',
    payload: {
        nome: string;
        msg: string
    }
}

// Type para o actions do reducer
type ChatActions = AddAction


// Criação do reducer
// O state receberá nosso array de Message
export const chatReducer = (state: Message[], actions: ChatActions) => {

    // Faz a verificação pra saber qual action executar
    switch(actions.type) {
        case 'add':
            // Duplicamos nosso array de message e adicionamos mais itens
            return [...state, {
                id: state.length,
                nome: actions.payload.nome,
                msg: actions.payload.msg,
            }]


        default:
            // Caso passamos algo errado nao executará nada
            return state;
    }
}