import './AboutProject.css'

const AboutProject = () => {
    return (
        <section id="about-project" className="about-project">
            <div className="about-project__content">
                <h1 className="about-project__title">О проекте</h1>
                <ul className="about-project__info-items list-reset">
                    <li className="about-project__info-item">
                        <h2 className="about-project__info-label">Дипломный проект включал 5 этапов</h2>
                        <p className="about-project__info-content">
                            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
                            доработки.
                        </p>
                    </li>
                    <li className="about-project__info-item">
                        <h2 className="about-project__info-label">На выполнение диплома ушло 5 недель</h2>
                        <p className="about-project__info-content">
                            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
                            защититься.
                        </p>
                    </li>
                </ul>
                <div className="about-project__progress-bar">
                    <div className="about-project__progress-back-end">
                        <p className="about-project__progress-item about-project__progress-item_back-end">1 неделя</p>
                        <p className="about-project__progress-item-label">Back-end</p>
                    </div>
                    <div className="about-project__progress-front-end">
                        <p className="about-project__progress-item about-project__progress-item_front-end">4 недели</p>
                        <p className="about-project__progress-item-label">Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;
