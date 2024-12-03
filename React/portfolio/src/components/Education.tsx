import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import "./Education.css"

export const Education = () => {
    return (
        <article className='container-education'>
            <h2 className='educacao'><FontAwesomeIcon icon={faGraduationCap} className='icon-graduation'/> Educação</h2>

            <section className='timeline-itens'>
                <div className="timeline-item">
                    <div className="timeline-linha"></div>
                    <div className="timeline-content">
                        <small className='timeline-date'><FontAwesomeIcon icon={faCalendarDays}/> 2018 - 2020</small>
                        <h3>Ensino Médio (Cândido José de Godói)</h3>
                        <p>Estudei nesse periodo no colégio Cândido José de Godói em Porto Alegre</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-linha"></div>
                    <div className="timeline-content">
                        <small className='timeline-date'><FontAwesomeIcon icon={faCalendarDays}/> 2021 - 2023</small>
                        <h3>Curso Técnico em Informática para Internet (Alcides Maya)</h3>
                        <p>No curso tecnico em informática para internet na escola Alcides Maya foi onde eu tive contato pela primeira vez com o mundo da tecnologia</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-linha"></div>
                    <div className="timeline-content">
                        <small className='timeline-date'><FontAwesomeIcon icon={faCalendarDays}/> 2024 </small>
                        <h3>Curso de Programação B7WEB (Online)</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad tenetur aperiam, quod eaque id explicabo, modi obcaecati impedit officia maxime animi. Consequatur molestiae laboriosam reprehenderit labore alias! Ea, similique alias.</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-linha"></div>
                    <div className="timeline-content">
                        <small className='timeline-date'><FontAwesomeIcon icon={faCalendarDays}/> 2024 - 2029</small>
                        <h3>Bacharelado Engenharia de Software (Anhanguera)</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad tenetur aperiam, quod eaque id explicabo, modi obcaecati impedit officia maxime animi. Consequatur molestiae laboriosam reprehenderit labore alias! Ea, similique alias.</p>
                    </div>
                </div>
            </section>
        </article>
    )
}