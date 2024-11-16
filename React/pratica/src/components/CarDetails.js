export const CarDetails = ({ modelo, km, ano }) => {
    return (
        <div>
            <h2>Detalhes do carro</h2>
            <ul>
                <li>Modelo: {modelo}</li>
                <li>Km: {km}</li>
                <li>ano: {ano}</li>
            </ul>
        </div>
    )
}