import './Navigation.css'
import avatar from '../../images/avatar.svg'
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation__content">
                <button className="navigation__btn-close"></button>
                <nav className="navigation__menu">
                    <NavLink className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
                             to="/">
                        Главная
                    </NavLink>
                    <NavLink className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
                             to="/movies">
                        Фильмы
                    </NavLink>
                    <NavLink className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
                             to="/saved-movies">
                        Сохраненные фильмы
                    </NavLink>
                </nav>

            </div>
        </div>
    )
}

export default Navigation;
