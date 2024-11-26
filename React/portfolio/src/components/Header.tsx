import "./Header.css"

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="home">
                    <img src="/images/codigo-html.png" alt="" />
                    <h2>MICHEL <span>FREITAS</span></h2>
                </div>
                <nav>
                    <a href=""></a>
                    <ul>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Projetos</li>
                        <li>Contato</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}