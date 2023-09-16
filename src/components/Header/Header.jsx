import './Header.css';
import logo from '../../images/logo.svg'
import {NavLink, useNavigate} from "react-router-dom";
import avatar from "../../images/avatar.svg";
import ProfileLabel from "../ProfileLabel/ProfileLabel";

const Header = ({loggedIn = true}) => {
    const navigate = useNavigate();

    return (
        <div className="header">
            <div className="header__content">
                <NavLink to='/'><img src={logo} alt="Логотип"/></NavLink>
                {loggedIn ?
                    <>
                        <nav className="header__links">
                            <NavLink className={({isActive}) => `header__link ${isActive ? 'header__link_active' : ''}`}
                                     to="/movies">
                                Фильмы
                            </NavLink>
                            <NavLink className={({isActive}) => `header__link ${isActive ? 'header__link_active' : ''}`}
                                     to="/saved-movies">
                                Сохраненные фильмы
                            </NavLink>
                        </nav>
                        <ProfileLabel/>
                    </>
                    :
                    <>
                        <div className="header__btns">
                            <button className="header__btn-signup"
                                    onClick={() => navigate('/signup')}>
                                Регистрация
                            </button>
                            <button className="header__btn-signin"
                                    onClick={() => navigate('/signin')}>
                                Войти
                            </button>
                        </div>
                        <div className="header__burger-menu"></div>
                    </>
                }
            </div>
        </div>
    )
}

export default Header;
