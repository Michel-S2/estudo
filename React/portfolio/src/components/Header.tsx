import "./Header.css"

export const Header = () => {
    const caracter:string = '</>';

    return (
        <header>
            <div className="container">
                <div className="home">
                    <h2><span className="span">{caracter}</span> MICHEL <span>FREITAS</span></h2>
                </div>
                <nav>
                    <a href=""></a>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Sobre</a></li>
                        <li><a href="">Projetos</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}