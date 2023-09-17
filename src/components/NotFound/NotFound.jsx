import {NavLink} from "react-router-dom";
import './NotFound.css'

const NotFound = () => {
    return (
        <section className="not-found">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__info">Страница не найдена</p>
            <NavLink className="not-found__link-back" to="/">Назад</NavLink>
        </section>
    )
}

export default NotFound;
