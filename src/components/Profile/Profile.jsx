import './Profile.css'
import {useContext, useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {CurrentUserContext} from "../../context/CurrentUserContext";

const Profile = () => {
    const {authUser} = useContext(CurrentUserContext);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isChange, setIsChange] = useState(true)

    useEffect(() => {
        setName(authUser.name);
        setEmail(authUser.email);
    }, [authUser])

    const handleChangeName = (name) => {
        setName(name);
        checkChange();
    }

    const handleChangeEmail = (email) => {
        setEmail(email);
        checkChange();
    }

    const checkChange = () => {
        if (authUser.name === name && authUser.email === email) {
            setIsChange(true);
        } else {
            setIsChange(false);
        }
    }

    const editProfile = (evt) => {
        evt.preventDefault();
        console.log('Редактирование');
    }

    const logout = () => {
        navigate('/')
    }

    return (
        <main className="profile">
            <section className="profile-content">
                <form className="profile__form" name="edit-user" noValidate>
                    <h1 className="profile__title">{'Привет, ' + authUser.name + '!'}</h1>
                    <div className="profile__input-block">
                        <label className="profile__label" htmlFor="input-name">Имя</label>
                        <input id="input-name"
                               className="profile__input"
                               value={name}
                               onChange={evt => handleChangeName(evt.target.value)}
                               type="text"
                               name="name"
                               placeholder="Введите имя"/>
                    </div>
                    <div className="profile__input-block">
                        <label className="profile__label" htmlFor="input-email">E-mail</label>
                        <input id="input-email"
                               className="profile__input"
                               value={email}
                               onChange={evt => handleChangeEmail(evt.target.value)}
                               type="email"
                               name="email"
                               placeholder="Введите email"/>
                    </div>
                    <button className="profile__btn profile__btn_edit"
                            disabled={isChange}
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
