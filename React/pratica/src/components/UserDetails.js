export const UserDetails = ({nome, idade, profissao}) => {
    return (
        <div>
            <h3>Nome: {nome}</h3>
            <ul>
                <li>Idade: {idade}</li>
                <li>Profissao: {profissao}</li>
                {idade >= 18 ? (<li>Pode Tirar Habilitação</li>) : (<li>Não pode tirar Habilitação</li>)}
            </ul>
            
        </div>
    )
}