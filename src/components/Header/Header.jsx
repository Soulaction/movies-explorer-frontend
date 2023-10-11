import './Header.css';
import logo from '../../images/logo.svg'
import burgerMenu from '../../images/burger-menu.svg'
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import {useContext, useState} from "react";
import ProfileLabel from "../ProfileLabel/ProfileLabel";
import {CurrentUserContext} from "../../context/CurrentUserContext";

const Header = () => {
    const navigate = useNavigate();
    const {loggedIn} = useContext(CurrentUserContext);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const {pathname} = useLocation();

    const openMenu = () => {
        setIsOpenMenu(true);
    }

    const closeMenu = () => {
        setIsOpenMenu(false);
    }

    return (
        <header className={`header${pathname === '/' ? '' : ' header_dark'}`} aria-label="Шапка страницы">
            <div className="header__content">
                <NavLink to='/'><img src={logo} alt="Логотип"/></NavLink>
                {loggedIn ?
                    <>
                        <nav className="header__links">
                            <ul className="header__links-list list-reset">
                                <li className="header__links-item">
                                    <NavLink
                                        className={({isActive}) => `header__link ${isActive ? 'header__link_active' : ''}`}
                                        to="/movies">
                                        Фильмы
                                    </NavLink>
                                </li>
                                <li className="header__links-item">
                                    <NavLink
                                        className={({isActive}) => `header__link ${isActive ? 'header__link_active' : ''}`}
                                        to="/saved-movies">
                                        Сохраненные фильмы
                                    </NavLink>
                                </li>
                                <li className="header__links-item">
                                    <NavLink className="header__profile-link"
                                             to="/profile">
                                        <ProfileLabel/>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <button className="header__burger-menu-btn btn-reset"
                                type="button"
                                aria-label="Кнопка меню"
                                onClick={openMenu}>
                            <img className="header__burger-menu-img"
                                 src={burgerMenu}
                                 alt="Меню"/>
                        </button>
                    </>
                    :
                    <>
                        <nav className="header__btns">
                            <button className="header__btn header__btn_signup btn-reset"
                                    type="button"
                                    onClick={() => navigate('/signup')}>
                                Регистрация
                            </button>
                            <button className="header__btn header__btn_signin btn-reset"
                                    type="button"
                                    onClick={() => navigate('/signin')}>
                                Войти
                            </button>
                        </nav>
                    </>
                }
            </div>
            {isOpenMenu && <Navigation onCloseMenu={closeMenu}/>}
        </header>
    )
}

export default Header;
