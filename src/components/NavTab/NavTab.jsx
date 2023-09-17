import './NavTab.css'
import {Link} from 'react-router-dom'

const NavTab = () => {
    return (
        <section className="nav-tab">
            <ul className="nav-tab__links-list list-reset">
                <li className="nav-tab__link-item">
                    <Link className="nav-tab__link" to="#">О проекте</Link>
                </li>
                <li className="nav-tab__link-item">
                    <Link className="nav-tab__link" to="#">Технологии</Link>
                </li>
                <li className="nav-tab__link-item">
                    <Link className="nav-tab__link" to="#">Студент</Link>
                </li>
            </ul>
        </section>
    )
}

export default NavTab;
