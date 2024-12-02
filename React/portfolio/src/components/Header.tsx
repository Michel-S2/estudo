import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
    const caracter:string = '</>';

    return (
        <header>
            <div className="container">
                <div className="home">
                    <h2><span className="span">{caracter}</span> MICHEL <span>FREITAS</span></h2>
                </div>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Sobre</a></li>
                        <li><a href="">Projetos</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                    <input type="checkbox" id="check" className="checkbox"/>
                    <label htmlFor="check">
                        <FontAwesomeIcon icon={faSun} className="sunIcon"/>
                        <FontAwesomeIcon icon={faMoon} className="moonIcon"/>
                        <div className="ball"></div>
                    </label>
                </nav>
            </div>
        </header>
    )
}