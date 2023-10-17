import './Profile.css'
import {useContext, useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {CurrentUserContext} from "../../context/CurrentUserContext";
import {mainApi} from "../../utils/MainApi";
import {useFormWithValidation} from "../../hooks/useFormWithValidation";

const Profile = ({handleLogin, updateUser}) => {
    const authUser = useContext(CurrentUserContext);
    const navigate = useNavigate();
    const {values, errors, handleChange, isValid, resetForm} = useFormWithValidation(authUser);
    const [isChange, setIsChange] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        checkChange();
    }, [values])

    const checkChange = () => {
        if (authUser.name === values.name && authUser.email === values.email) {
            setIsChange(false);
        } else {
            setIsChange(true);
        }
    };

    const editProfile = (evt) => {
        evt.preventDefault();
        setIsLoading(false);
        updateUser({name: values.name, email: values.email}).then(() => {
            setIsChange(false);
        }).finally(() => setIsLoading(false));
    }

    const logout = () => {
        mainApi.logout().then(res => {
            handleLogin(false);
            localStorage.clear();
            navigate('/');
        }).catch(err => console.log(err))
    }

    return (
        <main className="profile">
            <section className="profile-content">
                <form className="profile__form" name="edit-user" noValidate>
                    <h1 className="profile__title">{'Привет, ' + authUser?.name + '!'}</h1>
                    <div className="profile__input-block">
                        <label className="profile__label" htmlFor="input-name">Имя</label>
                        <input id="input-name"
                               className={`profile__input${errors.name ? ' profile__input_error' : ''}`}
                               value={values.name}
                               onChange={evt => handleChange(evt, 'name')}
                               disabled={isLoading}
                               type="text"
                               name="name"
                               pattern="[\sа-яА-Яa-zA-Z]+"
                               required
                               placeholder="Введите имя"/>
                    </div>
                    <span className="profile__text-error">{errors.name}</span>
                    <div className="profile__input-block">
                        <label className="profile__label" htmlFor="input-email">E-mail</label>
                        <input id="input-email"
                               className={`profile__input${errors.email ? ' profile__input_error' : ''}`}
                               value={values.email}
                               onChange={evt => handleChange(evt, 'email')}
                               disabled={isLoading}
                               type="email"
                               name="email"
                               pattern="^\S+@\S+\.\S+$"
                               required
                               placeholder="Введите email"/>
                    </div>
                    <span className="profile__text-error">{errors.email}</span>
                    <button className="profile__btn profile__btn_edit"
                            disabled={!isChange || !isValid || isLoading}
                            type="submit"
                            onClick={evt => editProfile(evt)}>
                        Редактировать
                    </button>
                    <button className="profile__btn profile__btn_logout"
                            type="button"
                            onClick={logout}>
                        Выйти из аккаунта
                    </button>
                </form>
            </section>
        </main>
    )
}

export default Profile;
