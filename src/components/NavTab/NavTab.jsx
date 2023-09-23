import './NavTab.css'
import {Link} from 'react-router-dom'

const NavTab = () => {
    return (
        <section className="nav-tab">
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
        </section>
    )
}

export default NavTab;
