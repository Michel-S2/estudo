import "./Section.css";
import { TypingEffect } from "./TypingEffect";
import TypeIt from "typeit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useTema } from "@/context/TemaContext";

export const Section = () => {
    const temaCtx = useTema();
    return (
        <section id="home" className={`containerSection ${temaCtx?.tema === 'light' ? 'light' : ''}`}>
            <div>
                <p>Olá, eu sou o...</p>
                <h2 className="h2Name">Michel Freitas</h2>
                {/* <TextTyper fullText="Web Developer - Front-End"/> */}
                <div className="efeito">
                    <TypingEffect/>
                </div>
            </div>
            <nav>
                <ul>
                    <li className="lista-section">
                        <a className="a" href="https://www.linkedin.com/in/michelonly/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="linkedin-icon"/>
                        </a>
                    </li>
                    <li className="lista-section">
                        <a className="a"  href="https://github.com/Michel-S2" target="_blank">
                            <FontAwesomeIcon icon={faGithub}className="github-icon"/>
                        </a>
                    </li>
                    <li className="lista-section">
                        <a className="a"  href="https://www.instagram.com/michelonly/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram}className="insta-icon"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}