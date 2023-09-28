import './Auth.css';
import {NavLink} from "react-router-dom";
import logo from '../../images/logo.svg'

const Auth = ({title, isLoginPage}) => {
    return (
        <sectinon className="auth">
            <form className="auth__form" name="auth-user" noValidate>
                <img className="auth__logo" src={logo}/>
                <h1 className="auth__title">{title}</h1>
                <label className={`auth__label${isLoginPage ? ' auth__label_none' : ''}`}
                       htmlFor="input-name">Имя</label>
                <input id="input-name"
                       className={`auth__input${isLoginPage ? ' auth__input_none' : ''}`}
                       type="text"
                       name="name"
                       placeholder="Введите имя"/>
                <span className={`auth__text-error auth__text-error_hidden${isLoginPage ? ' auth__text-error_none' : ''}`}>
                    Что-то пошло не так...
                </span>
                <label className="auth__label" htmlFor="input-email">E-mail</label>
                <input id="input-email"
                       className="auth__input auth__input_error"
                       type="email"
                       name="email"
                       placeholder="Введите email"/>
                <span className="auth__text-error auth__text-error_hidden">Что-то пошло не так...</span>
                <label className="auth__label" htmlFor="input-email">Пароль</label>
                <input id="input-password"
                       className="auth__input auth__input_error"
                       type="password"
                       name="password"
                       placeholder="Введите пароль"/>
                <span className="auth__text-error">Что-то пошло не так...</span>
                <button className={`auth__btn${isLoginPage ? ' auth__btn_login' : ''}`}>{isLoginPage ? 'Войти' : 'Зарегестрироваться'}</button>
                <p className="auth__text">
                    {isLoginPage ? 'Ещё не зарегестрированы? ' : 'Уже зарегестрированы? '}
                    <NavLink className="auth__link"
                             to={isLoginPage ? '/signup' : '/signin'}>{isLoginPage ? 'Регистрация' : 'Войти'}</NavLink>
                </p>
            </form>
        </sectinon>
    )
}

export default Auth;
