"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import "./Education.css"
import { Animacao } from './Animacao';

export const Education = () => {
    const ref = Animacao('hidden', 'fade-in')
    const ref2 = Animacao('hidden', 'fade-in')
    const ref3 = Animacao('hidden', 'fade-in')
    const ref4 = Animacao('hidden', 'fade-in')
    return (
        <article className='container-education'>
            <h2 className='educacao'><FontAwesomeIcon icon={faGraduationCap} className='icon-graduation'/> Educação</h2>

            <section className='timeline-itens'>
                <div ref={ref} className="hidden timeline-item">
                    <div className="timeline-linha"></div>
                    <div className="timeline-content">
                        <small className='timeline-date'><FontAwesomeIcon icon={faCalendarDays}/> 2018 - 2020</small>
                        <h3>Ensino Médio (Cândido José de Godói)</h3>
                        <p>Durante esse periodo estudei e me formei no colegio Godói em Porto Alegre.</p>
                    </div>
                </div>

                <div ref={ref2} className="hidden timeline-item">
                    <div className="timeline-linha"></div>
                    <div className="timeline-content">
                        <small className='timeline-date'><FontAwesomeIcon icon={faCalendarDays}/> 2021 - 2023</small>
                        <h3>Curso Técnico em Informática para Internet (Alcides Maya)</h3>
                        <p>Nesse curso que eu tive o primeiro contato com o mundo da tecnologia e decidi que viraria desenvolvedor.</p>
                    </div>
                </div>

                <div ref={ref3} className="hidden timeline-item">
                    <div className="timeline-linha"></div>
                    <div className="timeline-content">
                        <small className='timeline-date'><FontAwesomeIcon icon={faCalendarDays}/> 2024 </small>
                        <h3>Curso de Programação B7WEB (Online)</h3>
                        <p>Curso que estudo diariamente e está fazendo eu aprender diversas linguagens de programação, com diversos projetos práticos. No momento já estudei Html/Css, Javascript, Git/GitHub, Typescript, Tailwindcss e ReactJs.</p>
                    </div>
                </div>

                <div ref={ref4} className="hidden timeline-item">
                    <div className="timeline-linha"></div>
                    <div className="timeline-content">
                        <small className='timeline-date'><FontAwesomeIcon icon={faCalendarDays}/> 2024 - 2029</small>
                        <h3>Bacharelado Engenharia de Software (Anhanguera)</h3>
                        <p>Momento que decidi fazer parte dessa área e me matriculei em um curso superior de tecnologia para me especializar ainda mais!</p>
                    </div>
                </div>
            </section>
        </article>
    )
}