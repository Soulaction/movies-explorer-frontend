import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__name">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__wrapper">
                    <p className="footer__year">&copy; 2023</p>
                    <nav className="footer__nav">
                        <ul className="footer__nav-list list-reset">
                            <li className="footer__nav-item">
                                <a className="footer__link" href="https://practicum.yandex.ru" target="_blank">Яндекс.Практикум</a>
                            </li>
                            <li className="footer__nav-item">
                                <a className="footer__link" href="https://github.com/Soulaction?tab=projects" target="_blank">Github</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
