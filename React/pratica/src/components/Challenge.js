export const Challenge = () => {

    let numero1 = 10;
    let numero2 = 20;

    const handleButtonSum = () => {
        console.log(numero1 + numero2)
    }

    return (
        <div>
            {numero1} + {numero2}
            <button onClick={handleButtonSum}>Somar</button>
        </div>
    )
}