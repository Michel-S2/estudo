"use client"
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const caracter:string = '</>';

    const handleMenuMobile = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header>
            <div className="container">
                <div className="home">
                    <h2><span className="span">{caracter}</span> MICHEL <span>FREITAS</span></h2>
                </div>
                <nav className="nav-menu-desk">
                    <div className="btn-abrir" onClick={handleMenuMobile}>
                        <FontAwesomeIcon icon={faBars} className="hamburguer-icon"/>
                    </div>
                    <menu className={`menu-mobile ${menuOpen ? 'mostrar' : ''}`} onClick={() => setMenuOpen(false)}>
                        <div>
                            <FontAwesomeIcon icon={faTimes} className="btn-fechar"/>
                        </div>
                        <nav className="nav-menu-mobile" >
                            <ul className="menu">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#sobre">Sobre</a></li>
                                <li><a href="#educacao">Educação</a></li>
                                <li><a href="#projetos">Projetos</a></li>
                                <li><a href="#contato">Contato</a></li>
                            </ul>
                        </nav>
                    </menu>
                    <div className={`overlay ${menuOpen ? 'on' : ''}`} onClick={() => setMenuOpen(false)}></div>
                    <ul className="lista-navegacao">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#educacao">Educação</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                    {/* <input type="checkbox" id="check" className="checkbox"/> */}
                    {/* <label htmlFor="check">
                        <FontAwesomeIcon icon={faMoon} className="moonIcon"/>
                        <FontAwesomeIcon icon={faSun} className="sunIcon"/>
                        <div className="ball"></div>
                    </label> */}
                </nav>
            </div>
        </header>
    )
}