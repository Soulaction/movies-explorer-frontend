import './MoviesCardList.css'
import {arrayCards} from "../../utils/constant";
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import {useState} from "react";

const MoviesCardList = () => {
    const [isLoading, setIsLoading] = useState(true)
    setTimeout(() => {
        setIsLoading(false);
    }, 1000)
    const {pathname} = useLocation();

    return (
        <section className="movies-cards">
            {isLoading && <Preloader/>}
            {!isLoading &&
                <>
                    <ul className="movies-card__list list-reset">
                        {arrayCards.map(card => (
                            <MoviesCard key={card.id} {...card}/>
                        ))}
                    </ul>
                    {!(arrayCards.length === 0) && <div
                        className={`${pathname === '/movies' ? 'movies-cards__block' : 'movies-cards__block_in-movies'}`}>
                        <button className="movies-cards__more-btn" type="button">Ещё</button>
                    </div>}
                </>
            }
        </section>
    )
}

export default MoviesCardList;
