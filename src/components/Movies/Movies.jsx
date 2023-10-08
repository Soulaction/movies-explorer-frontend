import './Movies.css'
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {moviesApi} from "../../utils/MoviesApi";
import {useState} from "react";

const Movies = ({savedMovies, addMovies, deleteMovies}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [movies, setMovies] = useState([]);
    const [errorMovies, setErrorMovies] = useState('');

    const searchFilms = () => {
        setIsLoading(true);
        moviesApi.getAllFilms().then(res => {
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
                                savedMovies={savedMovies}
                                addMovies={addMovies}
                                deleteMovies={deleteMovies}
                                errorMovies={errorMovies}
                                isSavedPage={false}
                                isLoading={isLoading}/>
            </main>
            <Footer/>
        </>
    )
}

export default Movies;
