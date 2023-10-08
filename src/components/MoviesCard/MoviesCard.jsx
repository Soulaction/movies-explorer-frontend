import './MoviesCard.css';
import likeIcon from '../../images/icon-like.svg'
import unlikeIcon from '../../images/icon-unlike.svg'
import deleteIcon from '../../images/icon-delete.svg'

const MoviesCard = ({movie, isSaved, addMovies, deleteMovies, isSavedPage}) => {
    const urlMovies = 'https://api.nomoreparties.co';
    const isLike = () => {
        if (isSaved) {
            return {src: likeIcon, alt: 'Картинка лайка'};
        } else {
            return {src: unlikeIcon, alt: 'Картинка дизлайка'};
        }
    }

    const transformTime = (duration) => {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours === 0 ? '' : hours + 'ч '}${minutes}м`
    }

    const saveMovie = (movie) => {
        const savedMovie = {};
        savedMovie.movieId = movie.id;
        savedMovie.country = movie.country;
        savedMovie.director = movie.director;
        savedMovie.duration = movie.duration;
        savedMovie.year = movie.year;
        savedMovie.description = movie.description;
        savedMovie.image = urlMovies + movie.image.url;
        savedMovie.trailerLink = movie.trailerLink;
        savedMovie.thumbnail = urlMovies + movie.image.formats.thumbnail.url;
        savedMovie.nameRU = movie.nameRU;
        savedMovie.nameEN = movie.nameEN;

        addMovies(savedMovie);
    }

    const deleteMovie = (id) => {
        deleteMovies(id);
    }

    return (
        <li className="movies-card">
            <a className="movies-card__trailer-link" target="_blank" href={movie.trailerLink}>
                <img className="movies-card__poster" src={`${isSavedPage ? movie.image : urlMovies + movie.image.url}`}
                     alt="Картинка фильма"/>
            </a>
            <div className="movies-card__footer">
                <h2 className="movies-card__name">{movie.nameRU}</h2>
                {isSavedPage ?
                    <button className="movies-card__like-btn"
                            onClick={() => deleteMovie(movie.movieId)}
                            type="button">
                        <img
                            className={'movies-card__like-img movies-card__delete-card'}
                            src={deleteIcon} alt='Картинка удаления'/>
                    </button>
                    :
                    <button className="movies-card__like-btn"
                            onClick={isSaved ? () => deleteMovie(movie.id) : () => saveMovie(movie)}
                            type="button">
                        <img
                            className={'movies-card__like-img'}
                            src={isLike().src} alt={isLike().alt}/>
                    </button>
                }
            </div>
            <p className="movies-card__duration">{transformTime(movie.duration)}</p>
        </li>
    )
}

export default MoviesCard;
