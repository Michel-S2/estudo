import "./Sobre.css"

export const Sobre = () => {
    return (
        <section className="container">
            <h2>Sobre</h2>
            <section className="section-sobre">
                <div className="imagem-michel">
                    {/* <img src="/images/michel.jpg" alt="" /> */}
                </div>
                <article>
                    <p>Me chamo <span>Michel</span>, tenho 22 anos, sou estudante de <span>Engenharia de Software</span>, e focado em <span>Desenvolvimento Web Front-End</span></p>
                    <p>Estou em busca da minha primeira oportunidade no mundo da programação, possuo os conhecimento das seguintes tecnologias: <span>ReactJs, TailwindCss, TypeScript</span></p>
                    <p>Estou em constante evolução de estudo e sempre querendo aprender mais </p>
                </article>
            </section>
        </section>
    )
}