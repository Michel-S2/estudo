import "./Section.css";
import { TextTyper } from "./TextTyper";
import { TypingEffect } from "./TypingEffect";
import TypeIt from "typeit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Section = () => {
    return (
        <section className="containerSection">
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
                    {/* <li><a href="https://www.linkedin.com/in/michelonly/" target="_blank"><img src="/images/linkedin.png" alt="Icone do Linkedin" className="linkedin"/></a></li>
                    <li><a href=""><img src="/images/instagram.png" alt="Icone do Instagram" className="instagram"/></a></li>
                    <li><a href=""><img src="/images/github.png" alt="icone do GitHub" className="github"/></a></li> */}
                    <li>
                        <a className="a" href="https://www.linkedin.com/in/michelonly/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="linkedin-icon"/>
                        </a>
                    </li>
                    <li>
                        <a className="a"  href="">
                            <FontAwesomeIcon icon={faGithub}className="github-icon"/>
                        </a>
                    </li>
                    <li>
                        <a className="a"  href="">
                            <FontAwesomeIcon icon={faInstagram}className="insta-icon"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}