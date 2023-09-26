import './Header.css';
import logo from '../../images/logo.svg'
import burgerMenu from '../../images/burger-menu.svg'
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import {useState} from "react";
import ProfileLabel from "../ProfileLabel/ProfileLabel";

const Header = ({loggedIn = true}) => {
    const navigate = useNavigate();
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
                                    <NavLink className="header__profile"
                                             to="/profile">
                                        <ProfileLabel/>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <img className="header__burger-menu"
                             onClick={openMenu}
                             src={burgerMenu}
                             alt="Меню"/>
                    </>
                    :
                    <>
                        <div className="header__btns">
                            <button className="header__btn header__btn_signup btn-reset"
                                    onClick={() => navigate('/signup')}>
                                Регистрация
                            </button>
                            <button className="header__btn header__btn_signin btn-reset"
                                    onClick={() => navigate('/signin')}>
                                Войти
                            </button>
                        </div>
                    </>
                }
            </div>
            {isOpenMenu && <Navigation onCloseMenu={closeMenu}/>}
        </header>
    )
}

export default Header;
