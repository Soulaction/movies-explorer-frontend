import './Navigation.css'
import profileBlack from '../../images/profile-black.svg'
import {NavLink} from "react-router-dom";
import ProfileLabel from "../ProfileLabel/ProfileLabel";

const Navigation = ({onCloseMenu}) => {
    return (
        <aside className="navigation">
            <div className="navigation__content">
                <button className="navigation__btn-close btn-reset"
                        type="button"
                        aria-label="Кнопка закрытия панили навигации" onClick={onCloseMenu}></button>
                <nav className="navigation__menu">
                    <ul className="navigation__links-list list-reset">
                        <li className="navigation__links-item">
                            <NavLink
                                className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
                                to="/"
                                onClick={onCloseMenu}>
                                Главная
                            </NavLink>
                        </li>
                        <li className="navigation__links-item">
                            <NavLink
                                className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
                                to="/movies"
                                onClick={onCloseMenu}>
                                Фильмы
                            </NavLink>
                        </li>
                        <li className="navigation__links-item">
                            <NavLink
                                className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
                                to="/saved-movies"
                                onClick={onCloseMenu}>
                                Сохраненные фильмы
                            </NavLink>
                        </li>
                        <li className="navigation__links-item">
                            <NavLink to="/profile"  onClick={onCloseMenu}>
                                <ProfileLabel isMenu={true}/>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Navigation;
