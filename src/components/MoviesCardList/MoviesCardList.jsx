import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import {useState} from "react";

const MoviesCardList = ({movies, isLoading}) => {
    const {pathname} = useLocation();

    return (
        <section className="movies-cards">
            {isLoading && <Preloader/>}
            {!isLoading &&
                <>
                    <ul className="movies-cards__list list-reset">
                        {movies.map(card => (
                            <MoviesCard key={card.id} {...card}/>
                        ))}
                    </ul>
                    {<div className={`${pathname === '/movies' ? 'movies-cards__block' : 'movies-cards__block-not'}`}>
                        <button className="movies-cards__more-btn" type="button">Ещё</button>
                        <h1 className='movies-cards__error-search'>
                            Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.
                            Подождите немного и попробуйте ещё раз
                        </h1>
                    </div>}
                </>
            }
        </section>
    )
}

export default MoviesCardList;
