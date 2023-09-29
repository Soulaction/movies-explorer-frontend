import './MoviesCard.css';
import like from '../../images/icon-like.svg'
import unlike from '../../images/icon-unlike.svg'
import deleteMovie from '../../images/icon-delete.svg'
import {useLocation} from "react-router-dom";

const MoviesCard = ({image, duration, nameRU, owner}) => {
    const {pathname} = useLocation();
    const isLike = () => {
        if (pathname === '/saved-movies') {
            return {src: deleteMovie, alt: 'Картинка удаления'};
        }
        if (owner === 1) {
            return {src: like, alt: 'Картинка лайка'};
        } else {
            return {src: unlike, alt: 'Картинка дизлайка'};
        }
    }


    return (
        <li className="movies-card">
            <img className="movies-card__poster" src={image} alt="Картинка фильма"/>
                <div className="movies-card__footer">
                <h1 className="movies-card__name">{nameRU}</h1>
                <button className="movies-card__like-btn">
                <img className={`movies-card__like-img${pathname === '/saved-movies' ? ' movies-card__delete-card' : ''}`} src={isLike().src} alt={isLike().alt}/>
                </button>
                </div>
                <p className="movies-card__duration">{duration}</p>
            }
        </li>
    )
}

export default MoviesCard;
