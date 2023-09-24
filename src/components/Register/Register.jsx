import './Register.css';
import {NavLink} from "react-router-dom";
import logo from '../../images/logo.svg'

const Register = () => {
    return (
        <sectinon className="register">
            <form className="register__form" name="register-user" noValidate>
                <img className="register__logo" src={logo}/>
                <h1 className="profile__title">Добро пожаловать!</h1>
                <label className="register__label" htmlFor="input-name">Имя</label>
                <input id="input-name"
                       className="register__input"
                       type="text"
                       name="name"
                       placeholder="Введите имя"/>
                <span className="register__text-error register__text-error_hidden">Что-то пошло не так...</span>
                <label className="register__label" htmlFor="input-email">E-mail</label>
                <input id="input-email"
                       className="register__input register__input_error"
                       type="email"
                       name="email"
                       placeholder="Введите email"/>
                <span className="register__text-error">Что-то пошло не так...</span>
                <label className="register__label" htmlFor="input-email">Пароль</label>
                <input id="input-password"
                       className="register__input register__input_error"
                       type="password"
                       name="password"
                       placeholder="Введите пароль"/>
                <span className="register__text-error">Что-то пошло не так...</span>
                <button className="register__btn-register">Зарегестрироваться</button>
                <p className="register__text">Уже зарегестрированы? <NavLink className="register__link" to="/signin">Войти</NavLink></p>
            </form>
        </sectinon>
    )
}

export default Register;
