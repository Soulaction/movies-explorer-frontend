import './Techs.css'

const Techs = () => {
    return (
        <section id="techs" className="tech">
            <div className="tech__content">
                <h1 className="tech__title">Технологии</h1>
                <h2 className="tech__title-info">7 технологий</h2>
                <p className="tech__info">
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>
                <ul className="tech__list list-reset">
                    <li className="tech__list-item">
                        <p className="tech__list-item-name">
                            HTML
                        </p>
                    </li>
                    <li className="tech__list-item">
                        <p className="tech__list-item-name">
                            CSS
                        </p>
                    </li>
                    <li className="tech__list-item">
                        <p className="tech__list-item-name">
                            JS
                        </p>
                    </li>
                    <li className="tech__list-item">
                        <p className="tech__list-item-name">
                            React
                        </p>
                    </li>
                    <li className="tech__list-item">
                        <p className="tech__list-item-name">
                            Git
                        </p>
                    </li>
                    <li className="tech__list-item">
                        <p className="tech__list-item-name">
                            Express.js
                        </p>
                    </li>
                    <li className="tech__list-item">
                        <p className="tech__list-item-name">
                            mongoDB
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Techs;
