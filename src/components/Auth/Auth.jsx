import './Auth.css';
import {NavLink, useNavigate} from "react-router-dom";
import logo from '../../images/logo.svg'
import {useFormWithValidation} from "../../hooks/useFormWithValidation";
import {mainApi} from "../../utils/MainApi";
import InfoMessage from "../InfoMessage/InfoMessage";
import {useState} from "react";

const Auth = ({title, handleLogin, isLoginPage}) => {
    const navigate = useNavigate();
    const {values, errors, handleChange, isValid, resetForm} = useFormWithValidation();
    const [infoObject, setInfoObject] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        setIsOpen(false)
    }

    const register = (evt) => {
        evt.preventDefault();
        mainApi.registration(values).then(res => {
            setInfoObject({
                typeInfo: "success",
                textInfo: "Вы зарегистрированы"
            })
            resetForm();
            navigate('/signin');
        }).catch(err => {
            setInfoObject({
                typeInfo: "error",
                textInfo: err.message
            })
            setIsOpen(true);
        })
    }

    const auth = (evt) => {
        evt.preventDefault();
        mainApi.login(values).then(res => {
            handleLogin(true);
            navigate('/');
        }).catch(err => {
            setInfoObject({
                typeInfo: "error",
                textInfo: err.message
            })
            setIsOpen(true);
        })
    }

    return (<>
            <main className="auth">
                <section className="auth-content">
                    <form className="auth__form" name="auth-user" noValidate>
                        <NavLink className="auth__logo" to='/'>
                            <img className="auth__logo-img"
                                 src={logo}
                                 alt="Логотип"/>
                        </NavLink>
                        <h1 className="auth__title">{title}</h1>
                        {!isLoginPage &&
                            <>
                                <h1 className="auth__title">{title}</h1>
                                <label className="auth__label"
                                       htmlFor="input-name">Имя</label>
                                <input id="input-name"
                                       className={`auth__input ${errors.name ? 'auth__input_error' : ''}`}
                                       type="text"
                                       name="name"
                                       onInput={handleChange}
                                       value={values.name}
                                       pattern="[\Wа-яА-Яa-zA-Z]+"
                                       required
                                       placeholder="Введите имя"/>
                                <span
                                    className="auth__text-error">{errors.name}</span>
                            </>
                        }
                        <label className="auth__label" htmlFor="input-email">E-mail</label>
                        <input id="input-email"
                               className={`auth__input ${errors.email ? 'auth__input_error' : ''}`}
                               type="email"
                               name="email"
                               onInput={handleChange}
                               value={values.email}
                               required
                               placeholder="Введите email"/>
                        <span className="auth__text-error">{errors.email}</span>
                        <label className="auth__label" htmlFor="input-email">Пароль</label>
                        <input id="input-password"
                               className={`auth__input ${errors.password ? 'auth__input_error' : ''}`}
                               type="password"
                               name="password"
                               onInput={handleChange}
                               value={values.password}
                               required
                               placeholder="Введите пароль"/>
                        <span className="auth__text-error">{errors.password}</span>
                        <button className={`auth__btn ${isLoginPage ? 'auth__btn_login' : ''}`}
                                onClick={(evt) => {
                                    isLoginPage ? auth(evt) : register(evt)
                                }}
                                disabled={!isValid}
                                type="submit">
                            {isLoginPage ? 'Войти' : 'Зарегестрироваться'}
                        </button>
                        <p className="auth__text">
                            {isLoginPage ? 'Ещё не зарегестрированы? ' : 'Уже зарегестрированы? '}
                            <NavLink className="auth__link"
                                     to={isLoginPage ? '/signup' : '/signin'}>{isLoginPage ? 'Регистрация' : 'Войти'}</NavLink>
                        </p>
                    </form>
                </section>
            </main>
            <InfoMessage isOpen={isOpen} onClose={onClose} {...infoObject}/>
        </>
    )
}

export default Auth;
