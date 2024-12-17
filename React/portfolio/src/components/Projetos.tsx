"use client"
import "./Projetos.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Animacao } from './Animacao';
import { useTema } from "@/context/TemaContext";

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
        imagem: 'https://github.com/user-attachments/assets/21f4054f-5762-4422-8cf1-a53ad0d82f4e',
        descricao: 'Este projeto foi desenvolvido como parte do curso da B7Web, mas todo o design, incluindo imagens e escolha de cores, foi criado por mim de forma independente. O foco principal do projeto foi o treinamento de conceitos de orientação a objetos, aplicados na prática.',
        tecnologias: ['Html', 'CSS', 'JavaScript'],
        deploy: 'https://github.com/Michel-S2/Rinha-de-Pokemon',
        projeto: 'https://michel-s2.github.io/Rinha-de-Pokemon/'
    },
    {
        id: 2,
        titulo: 'Post de Blog',
        imagem: 'https://github.com/user-attachments/assets/de97612c-d8e6-4e9a-a52f-2ef9aeb3fcc8',
        descricao: 'Projeto que simula postagens de um blog, desenvolvido com o objetivo de aprimorar conhecimentos no uso de Reducer e Context, explorando a gestão de estado de forma eficiente.',
        tecnologias: ['TypeScript', 'ReactJs', 'TailwindCSS'],
        deploy: 'https://github.com/Michel-S2/Post-de-Blog',
        projeto: 'https://post-de-blog-arspigw2c-michel-s2s-projects.vercel.app/',
    }
]


export const Projetos = () => {
    const ref = Animacao('hidden', 'fade-in');
    const temaCtx = useTema();

    const handleClick = (item:string) => {
        window.open(`${item}`, '_blank');
      };

    return (
        <section  className={`projeto-section ${temaCtx?.tema === 'light' ? 'light' : ''}`}>
            <div id="projetos" className="container-projetos">
                <h2 ref={ref} className="hidden"><span><FontAwesomeIcon icon={faPen} className="icon-pen"/></span> Projetos</h2>
                <section className="projeto-area">

                    {projetos.map((item) => (
                        <div key={item.id} className="content-projeto">
                            <div onClick={() => handleClick(item.projeto)} className="projeto-thumb" style={{backgroundImage: `url(${item.imagem})`}}></div>
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