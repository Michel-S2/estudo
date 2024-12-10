"use client"
import "./Projetos.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Animacao } from './Animacao';

type ProjetosTipado = {
    id: number;
    titulo: string;
    imagem: string;
    descricao: string;
    tecnologias: string[];
    deploy: string;
    projeto: string;
}

const projetos:ProjetosTipado[] = [
    {
        id: 1, 
        titulo: 'Rinha de Pokemon',
        imagem: 'https://github.com/user-attachments/assets/b6babbbf-a932-438c-bba9-a80203a305d8',
        descricao: 'Esse projeto foi feito a partir do curso b7web, porém o design, as imagens e cores eu fiz a parte. Esse foi um projeto para treinarmos a orientação a objeto',
        tecnologias: ['Html', 'CSS', 'JavaScript'],
        deploy: 'https://github.com/Michel-S2/Rinha-de-Pokemom',
        projeto: 'https://michel-s2.github.io/Rinha-de-Pokemom/'
    },
    {
        id: 2,
        titulo: 'Treino Fofo',
        imagem: 'https://github.com/user-attachments/assets/1bf3f176-db6e-4cfd-a17a-0f03ca6f61c3',
        descricao: 'App para deixar de treinar fofo',
        tecnologias: ['php', 'js'],
        deploy: 'https://github.com/Michel-S2/Rinha-de-Pokemom',
        projeto: 'https://michel-s2.github.io/Rinha-de-Pokemom/',
    }
]


export const Projetos = () => {
    const ref = Animacao('hidden', 'fade-in');

    const handleClick = (item:string) => {
        window.open(`${item}`, '_blank');
      };

    return (
        <section  className="projeto-section">
            <div id="projetos" className="container-projetos">
                <h2 ref={ref} className="hidden"><span><FontAwesomeIcon icon={faPen} className="icon-pen"/></span> Projetos</h2>
                <section className="projeto-area">

                    {projetos.map((item) => (
                        <div key={item.id} className="content-projeto">
                            <div onClick={() => handleClick(item.deploy)} className="projeto-thumb" style={{backgroundImage: `url(${item.imagem})`}}></div>
                            <div className="projeto-info">
                                <h3 className="projeto-titulo">{item.titulo}</h3>
                                <p>{item.descricao}</p>
                                <div className="projeto-tecnologias">
                                    {item.tecnologias.map((tecnologias, index) => (
                                        <div key={index}>{tecnologias}</div>
                                    ))}
                                </div>
                                <div className="projeto-button">
                                    <button>
                                        <a className="button-tag-a" href={`${item.deploy}`} target="_blank">Git Hub <span><FontAwesomeIcon icon={faGithub} className="projeto-icon-git"/></span></a>
                                    </button>
                                    <button>
                                        <a className="button-tag-a" href={`${item.projeto}`} target="_blank">Projeto <span><FontAwesomeIcon icon={faArrowAltCircleRight} className="projeto-icon-arrow"/></span></a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </section>
            </div>
        </section>
    )
}