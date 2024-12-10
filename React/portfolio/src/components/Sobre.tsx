'use client'
import "./Sobre.css"
import "./Animacao.css"
import { Animacao } from "./Animacao"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMedal } from '@fortawesome/free-solid-svg-icons';

type icones = {
    id: number;
    img: string
}

const icons:icones[] = [
    {id: 1, img: "/images/icon1.png"},
    {id: 2, img: "/images/icon2.png"},
    {id: 3, img: "/images/icon3.png"},
    {id: 4, img: "/images/icon4.png"},
    {id: 5, img: "/images/icon5.png"},
    {id: 6, img: "/images/icon6.png"},
    {id: 7, img: "/images/icon7.png"},
    {id: 8, img: "/images/icon1.png"},
    {id: 9, img: "/images/icon2.png"},
    {id: 10, img: "/images/icon3.png"},
    {id: 11, img: "/images/icon4.png"},
    {id: 12, img: "/images/icon5.png"},
    {id: 13, img: "/images/icon6.png"},
    {id: 14, img: "/images/icon7.png"},
]

const iconsDuplicate = icons.map(itens => [itens, {...icons}]);

export const Sobre = () => {
    const ref = Animacao('slide-in-left', 'slide-in-left-active');
    const ref2 = Animacao('slide-in-right', 'slide-in-right-active');
    const ref3 = Animacao('hidden', 'fade-in');

    return (
        <section  className="container-sobre">
            <div id="sobre" className="content-sobre">
                <h2 ref={ref3} className="hidden sobre"><span><FontAwesomeIcon className="medal-icon" icon={faMedal}/></span> Sobre</h2>
                <section className="section-sobre">
                    <div ref={ref} className="slide-in-left imagem-michel">
                        {/* <img src="/images/michel.jpg" alt="" /> */}
                    </div>
                    <article ref={ref2} className="slide-in-right">
                        <p>👨‍💻 Desenvolvedor Front-End</p>
                        <p>🏆 Em busca de um estágio para colocar em prática os conhecimentos teóricos</p>
                        <p>🎓 Cursando Engenharia de Software</p>
                        <p>📚 Conhecimentos em ReactJs, TailwindCss e TypeScript</p>
                        <p>🚀 Buscando uma oportunidade para atuar como desenvolvedor</p>
                        {/* <p>Me chamo <span>Michel</span>, tenho 22 anos, sou estudante de <span>Engenharia de Software</span>, e focado em <span>Desenvolvimento Web Front-End</span></p>
                        <p>Estou em busca da minha primeira oportunidade no mundo da programação, possuo os conhecimento das seguintes tecnologias: <span>ReactJs, TailwindCss, TypeScript</span></p>
                        <p>Estou em constante evolução de estudo e sempre querendo aprender mais </p> */}
                    </article>
                </section>
                <section className="container-scroll">
                    <div className="scroll">
                        {icons.map((item) => (
                            <div className="scroll-item" key={item.id}><img className="icon" src={item.img} alt={`Icone ${item.img}`} /></div>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    )
}