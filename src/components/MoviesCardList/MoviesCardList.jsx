import './MoviesCardList.css'
import {arrayCards} from "../utils/constant";
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router-dom";

const MoviesCardList = () => {
    const {pathname} = useLocation();

    return (
        <section className="movies-cards">
            <ul className="movies-card__list list-reset">
                {arrayCards.map(card => (
                    <MoviesCard {...card}/>
                ))}
            </ul>
            <div className={`${pathname === '/movies' ? 'movies-cards__block' : 'movies-cards__block_in-movies'}`}>
                {pathname === '/movies' && <button className="movies-cards__more-btn">Ещё</button>}
            </div>
        </section>
    )
}

export default MoviesCardList;
