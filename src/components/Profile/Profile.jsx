import './Profile.css'
import {useContext, useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {CurrentUserContext} from "../../context/CurrentUserContext";
import {mainApi} from "../../utils/MainApi";
import InfoMessage from "../InfoMessage/InfoMessage";

const Profile = ({handleLogin, updateUser}) => {
    const authUser = useContext(CurrentUserContext);
    console.log('Profile', authUser);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isChange, setIsChange] = useState(false);

    useEffect(() => {
        setName(authUser?.name);
        setEmail(authUser?.email);
    }, [authUser])

    useEffect(() => {
        checkChange();
    }, [name, email])

    const checkChange = () => {
        if (authUser.name === name && authUser.email === email) {
            setIsChange(false);
        } else {
            setIsChange(true);
        }
    };

    const handleChangeName = (name) => {
        setName(name);
    }

    const handleChangeEmail = (email) => {
        setEmail(email);
    }

    const editProfile = (evt) => {
        evt.preventDefault();
        updateUser({name, email}).then(() => {
            setIsChange(false);
        })
    }

    const logout = () => {
        mainApi.logout().then(res => {
            handleLogin(false);
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
                            disabled={!isChange}
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
