import './NavTab.css'

const NavTab = () => {
    return (
        <section className="nav-tab">
            <nav  className="nav-tab__navigation">
                <ul className="nav-tab__links-list list-reset">
                    <li className="nav-tab__link-item">
                        <a className="nav-tab__link" href="#about-project">О проекте</a>
                    </li>
                    <li className="nav-tab__link-item">
                        <a className="nav-tab__link" href="#techs">Технологии</a>
                    </li>
                    <li className="nav-tab__link-item">
                        <a className="nav-tab__link" href="#about-me">Студент</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default NavTab;
