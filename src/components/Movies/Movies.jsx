import './Movies.css'
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {useSearchFilms} from "../../hooks/useSearchFilms";

const Movies = ({movies, errorMovies, savedMovies, addMovies, deleteMovies, isSavedPage}) => {
    const {filterMovies, isLoading, searchParams, handleFilterFilms} = useSearchFilms(movies, isSavedPage)
    return (
        <>
            <Header/>
            <main className="movies">
                <SearchForm searchFilms={handleFilterFilms} searchParams={searchParams} isLoading={isLoading}/>
                <MoviesCardList movies={filterMovies}
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
