import './Portfolio.css'
import link from '../../images/link-portfolio.png'

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="portfolio__content">
                <h1 className="portfolio__title">Портфолио</h1>
                <ul className="portfolio__links list-reset">
                    <li className="portfolio__link-item">
                        <a className="portfolio__link" target="_blank"
                           href="https://github.com/Soulaction/how-to-learn">
                            <p className="portfolio__link-name">Статичный сайт</p>
                            <img className="portfolio__link-icon" src={link} alt="Картинка переадресации"/>
                        </a>
                    </li>
                    <li className="portfolio__link-item">
                        <a className="portfolio__link" target="_blank"
                           href="https://github.com/Soulaction/russian-travel">
                            <p className="portfolio__link-name">Адаптивный сайт</p>
                            <img className="portfolio__link-icon" src={link} alt="Картинка переадресации"/>
                        </a>
                    </li>
                    <li className="portfolio__link-item">
                        <a className="portfolio__link" target="_blank"
                           href="https://github.com/Soulaction/react-mesto-api-full-gha">
                            <p className="portfolio__link-name">Одностраничное приложение</p>
                            <img className="portfolio__link-icon" src={link} alt="Картинка переадресации"/>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;
