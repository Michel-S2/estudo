"use client"
import "./Contato.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faEnvelope, faPhone, faDownload, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faWhatsapp, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Animacao } from './Animacao';
import {useRef} from "react"

export const Contato = () => {
    const ref = Animacao('hidden', 'fade-in');
    const ref2 = Animacao('zoom-in', 'zoom-in-active');
    return (
        <section  className="contato-section">
            <h2 id="contato" ref={ref} className="hidden contato-titulo"><span><FontAwesomeIcon icon={faHandshake}/></span> Contato</h2>
            <div ref={ref2} className="zoom-in contato-container">
                <div className="contato-content1">
                    <div className="contato-text">
                        <h3>Me contrate!</h3>
                        <p>Estou sempre em busca de melhorar minhas habilidades, meu objetivo é colaborar com times criativos para resolver problemas e desenvolver soluções inovadoras. Estou aberto a novas oportunidades e desafios. Se você acredita que meu perfil se alinha ao que sua empresa busca, será um prazer enorme poder fazer parte da sua equipe!</p>
                    </div>
                   
                    <div className="contato-informacoes">
                    <a href="/MICHEL-FREITASCV.pdf" download><div className="info-item cv"><span><FontAwesomeIcon icon={faDownload} className="icon-info"/></span> Curriculo</div></a>
                        <div className="info-item celular"><span><FontAwesomeIcon icon={faPhone} className="icon-info"/></span> (51)99736-1207</div>
                        <div className="info-item email"><span><FontAwesomeIcon icon={faEnvelope} className="icon-info"/></span> freitasmichel1414@gmail.com</div>
                    </div>
                    
                    <nav className="contato-rede-social">
                        <ul className="contato-navegacao">
                            <li className="rede-social">
                                <a href="https://www.linkedin.com/in/michelonly/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} className="contato li"/>
                                </a>
                            </li>
                            <li className="rede-social">
                                <a href="https://wa.me/05551997361207?text=Ol%C3%A1%2C%20tudo%20bem%3F" target="_blank">
                                <FontAwesomeIcon icon={faWhatsapp} className="contato wpp"/>
                                </a>
                            </li>
                            <li className="rede-social">
                                <a href="https://www.instagram.com/michelonly/" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} className="contato i"/>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="contato-content2">
                    <form action="https://formsubmit.co/freitasmichel1414@gmail.com" method="POST">
                    <input type="hidden" name="_captcha" value="false"></input>
                        <label htmlFor="input-name">Seu nome</label>
                        <div>
                            <span className="span-icon"><FontAwesomeIcon icon={faCircleInfo} className="span-icon-name"/></span>
                            <input type="text" name="name" className="text-name" id="input-name" placeholder="Digite seu nome" required/>
                        </div>
                        <label htmlFor="input-email">Email</label>
                        <div>
                            <span className="span-icon"><FontAwesomeIcon icon={faEnvelope} className="span-icon-email"/></span>
                            <input type="email" name="email" className="email-contato" id="input-email" placeholder="Digite seu e-mail" required/>
                        </div>
                        <label htmlFor="input-message">Mensagem</label>
                        <textarea name="message" id="input-message" className="text-area-info" placeholder="Digite uma mensagem..."></textarea>
                        <input type="submit" value="Enviar Mensagem" className="input-submit"/>
                    </form>
                </div>
            </div>
        </section>
    )
}