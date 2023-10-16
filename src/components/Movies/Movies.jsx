import './Movies.css'
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {useSearchFilms} from "../../hooks/useSearchFilms";

const Movies = ({movies, errorMovies, savedMovies, addMovies, deleteMovies, isSavedPage}) => {
    const {filterMovies, isLoading, searchParams, handleFilterFilms, isInfo} = useSearchFilms(movies, isSavedPage, errorMovies);
    return (
        <>
            <Header/>
            <main className="movies">
                <SearchForm searchFilms={handleFilterFilms} searchParams={searchParams} isLoading={isLoading}/>
                <MoviesCardList movies={filterMovies}
                                savedMovies={savedMovies}
                                addMovies={addMovies}
                                deleteMovies={deleteMovies}
                                infoMovies={isInfo}
                                isSavedPage={false}
                                isLoading={isLoading}/>
            </main>
            <Footer/>
        </>
    )
}

export default Movies;
