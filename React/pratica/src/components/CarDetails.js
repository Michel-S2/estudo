import styles from "./CarDetails.css";

export const CarDetails = ({ modelo, km, ano, isNew }) => {
    const cars = [
        {id: 1, modelo: 'Celta', km: 185000, ano: 2008, isNew: false },
        {id: 2, modelo: 'Gol', km: 220000, ano: 2002, isNew: false },
        {id: 3, modelo: 'Fiesta', km: 90000, ano: 2015, isNew: false },
        {id: 4, modelo: 'Onix', km: 0, ano: 2024, isNew: true }
    ]
    return (
        <div>
            <h2>Carros Novos e Seminovos</h2>
            {cars.map(car => (
                <ul>
                    <li>Carro: {car.modelo}</li>
                    <li>Km: {car.km}</li>
                    <li>Ano: {car.ano}</li>
                    {car.isNew &&
                        <li className="carro_zero">Carro zero!!</li>
                    }
                </ul>
            ))}
        </div>
    )
}