import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import {useEffect, useState} from "react";
import {getInitMovies, getLoadMovies} from "../../utils/utils";

const MoviesCardList = ({movies, savedMovies, isLoading, errorMovies, addMovies, deleteMovies, isSavedPage}) => {
    const [widthWindow, setWidthWindow] = useState(0);
    const [paramsLoadMovies, setParamsLoadMovies] = useState(getInitMovies(window.innerWidth));

    useEffect(() => {
        const changeWidthWindow = () => {
            setWidthWindow(window.innerWidth)
            setParamsLoadMovies((params) => {
                return {...params, ...getLoadMovies(widthWindow)}
            });
        }
        changeWidthWindow();
        window.addEventListener('resize', changeWidthWindow)
        return () => window.removeEventListener('resize', changeWidthWindow);
    }, [widthWindow, movies])

    const loadMovies = () => {
        setParamsLoadMovies((params) => {
            return {...params, initialCount: params.initialCount + params.loadCount}
        });
    }

    const checkSaved = (movie) => {
        console.log(movie, savedMovies,);
        return !!savedMovies.find(el => el.movieId === movie.id);
    }

    return (
        <section className="movies-cards">
            {isLoading && <Preloader/>}
            {!isLoading &&
                <>
                    <ul className="movies-cards__list list-reset">
                        {movies.slice(0, paramsLoadMovies.initialCount).map(movie => (
                            isSavedPage ?
                                <MoviesCard key={movie._id}
                                            deleteMovies={deleteMovies}
                                            isSavedPage={isSavedPage}
                                            movie={movie}/>
                                :
                                <MoviesCard key={movie.id ? movie.id : movie._id}
                                            isSaved={checkSaved(movie)}
                                            addMovies={addMovies}
                                            deleteMovies={deleteMovies}
                                            isSavedPage={isSavedPage}
                                            movie={movie}/>
                        ))}
                    </ul>
                    {paramsLoadMovies.initialCount < movies.length &&
                        <div className='movies-cards__block'>
                            <button className="movies-cards__more-btn"
                                    onClick={loadMovies}
                                    type="button">Ещё
                            </button>
                        </div>}
                    {errorMovies &&
                        <div className='movies-cards__block'>
                            <h1 className='movies-cards__error-search'>
                                {errorMovies}
                            </h1>
                        </div>}
                </>
            }
        </section>
    )
}

export default MoviesCardList;
