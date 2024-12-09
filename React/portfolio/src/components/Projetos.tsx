"use client"
import "./Projetos.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Animacao } from './Animacao';

export const Projetos = () => {
    const ref = Animacao('hidden', 'fade-in');

    const handleClick = () => {
        window.open('https://michel-s2.github.io/Rinha-de-Pokemom/', '_blank');
      };

    return (
        <section className="projeto-section">
            <div className="container-projetos">
                <h2 ref={ref} className="hidden"><span><FontAwesomeIcon icon={faPen} className="icon-pen"/></span> Projetos</h2>
                <section className="projeto-area">
                    <div className="content-projeto">
                        <div onClick={handleClick} className="projeto-thumb"></div>
                        <div className="projeto-info">
                            <h3 className="projeto-titulo">Rinha de Pokemon</h3>
                            <p className="projeto-descricao">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio perferendis id molestias et minima earum natus debitis alias, recusandae harum voluptatibus labore quod itaque dolorum nemo laboriosam placeat commodi quo!</p>
                            <div className="projeto-tecnologias">
                                <div>React</div>
                                <div>Tailwindcss</div>
                                <div>Next</div>
                            </div>
                            <div className="projeto-button">
                                <button>
                                    <a href="https://github.com/Michel-S2/Rinha-de-Pokemom" target="_blank">Git Hub <span><FontAwesomeIcon icon={faGithub} className="projeto-icon-git"/></span>
                                    </a>
                                </button>
                                <button>
                                    <a href="https://michel-s2.github.io/Rinha-de-Pokemom/" target="_blank">Projeto <span><FontAwesomeIcon icon={faArrowAltCircleRight} className="projeto-icon-arrow"/></span>
                                    </a>
                                </button>
                            </div>
                        </div>

                    </div>

                    
                    <div className="content-projeto">
                        <div onClick={handleClick} className="projeto-thumb"></div>
                        <div className="projeto-info">
                            <h3 className="projeto-titulo">Rinha de Pokemon</h3>
                            <p className="projeto-descricao">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio perferendis id molestias et minima earum natus debitis alias, recusandae harum voluptatibus labore quod itaque dolorum nemo laboriosam placeat commodi quo!</p>
                            <div className="projeto-tecnologias">
                                <div>React</div>
                                <div>Tailwindcss</div>
                                <div>Next</div>
                            </div>
                            <div className="projeto-button">
                            <button>
                                    <a href="https://github.com/Michel-S2/Rinha-de-Pokemom" target="_blank">Git Hub <span><FontAwesomeIcon icon={faGithub} className="projeto-icon-git"/></span>
                                    </a>
                                </button>
                                <button>
                                    <a href="https://michel-s2.github.io/Rinha-de-Pokemom/" target="_blank">Projeto <span><FontAwesomeIcon icon={faArrowAltCircleRight} className="projeto-icon-arrow"/></span>
                                    </a>
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="content-projeto">
                        <div onClick={handleClick}  className="projeto-thumb"></div>
                        <div className="projeto-info">
                            <h3 className="projeto-titulo">Rinha de Pokemon</h3>
                            <p className="projeto-descricao">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio perferendis id molestias et minima earum natus debitis alias, recusandae harum voluptatibus labore quod itaque dolorum nemo laboriosam placeat commodi quo!</p>
                            <div className="projeto-tecnologias">
                                <div>React</div>
                                <div>Tailwindcss</div>
                                <div>Next</div>
                            </div>
                            <div className="projeto-button">
                            <button>
                                    <a href="https://github.com/Michel-S2/Rinha-de-Pokemom" target="_blank">Git Hub <span><FontAwesomeIcon icon={faGithub} className="projeto-icon-git"/></span>
                                    </a>
                                </button>
                                <button>
                                    <a href="https://michel-s2.github.io/Rinha-de-Pokemom/" target="_blank">Projeto <span><FontAwesomeIcon icon={faArrowAltCircleRight} className="projeto-icon-arrow"/></span>
                                    </a>
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="content-projeto">
                        <div onClick={handleClick} className="projeto-thumb"></div>
                        <div className="projeto-info">
                            <h3 className="projeto-titulo">Rinha de Pokemon</h3>
                            <p className="projeto-descricao">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio perferendis id molestias et minima earum natus debitis alias, recusandae harum voluptatibus labore quod itaque dolorum nemo laboriosam placeat commodi quo!</p>
                            <div className="projeto-tecnologias">
                                <div>React</div>
                                <div>Tailwindcss</div>
                                <div>Next</div>
                            </div>
                            <div className="projeto-button">
                            <button>
                                    <a href="https://github.com/Michel-S2/Rinha-de-Pokemom" target="_blank">Git Hub <span><FontAwesomeIcon icon={faGithub} className="projeto-icon-git"/></span>
                                    </a>
                                </button>
                                <button>
                                    <a href="https://michel-s2.github.io/Rinha-de-Pokemom/" target="_blank">Projeto <span><FontAwesomeIcon icon={faArrowAltCircleRight} className="projeto-icon-arrow"/></span>
                                    </a>
                                </button>
                            </div>
                        </div>

                    </div>



                </section>
            </div>
        </section>
    )
}