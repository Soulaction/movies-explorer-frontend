import {NavLink, useNavigate} from "react-router-dom";
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate();

    const back = () => {
        navigate(-1);
    }

    return (
        <main className="not-found">
            <section className="not-found-content">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__info">Страница не найдена</p>
                <button className="not-found__link-back" onClick={back}>Назад</button>
            </section>
        </main>
    )
}

export default NotFound;
