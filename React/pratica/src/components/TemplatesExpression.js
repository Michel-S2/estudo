export const TemplateExpression = () => {

    const name = 'Michel';
    const data = {
        age: 21,
        job: 'Programmer'
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você trabalha como {data.job}</p>
        </div>
    )
}