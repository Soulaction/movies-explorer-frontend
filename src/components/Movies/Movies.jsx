import './Movies.css'
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import searchForm from "../SearchForm/SearchForm";
import {moviesApi} from "../../utils/MoviesApi";
import {useState} from "react";

const Movies = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [movies, setMovies] = useState([]);
    const [errorMovies, setErrorMovies] = useState('');

    const searchFilms = () => {
        setIsLoading(true);
        moviesApi.getAllFilms().then(res => {
            console.log(res);
            setMovies(res);
            setIsLoading(true);
        }).catch(err => {
            console.log(err);
            setErrorMovies('')
        }).finally(() => {
            setIsLoading(false);
        });
    }

    return (
        <>
            <Header/>
            <main className="movies">
                <SearchForm searchFilms={searchFilms}/>
                <MoviesCardList movies={movies}
                                errorMovies={errorMovies}
                                isLoading={isLoading}/>
            </main>
            <Footer/>
        </>
    )
}

export default Movies;
