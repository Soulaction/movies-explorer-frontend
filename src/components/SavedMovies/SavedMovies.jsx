import './SavedMovies.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import {useSearchFilms} from "../../hooks/useSearchFilms";

const SavedMovies = ({deleteMovies, savedMovies, isSavedPage}) => {
    const {filterMovies, isLoading, searchParams, handleFilterFilms, isInfo} = useSearchFilms(savedMovies, isSavedPage, '');
    return (
        <>
            <Header/>
            <main className="save-movies">
                <SearchForm searchFilms={handleFilterFilms} searchParams={searchParams} isLoading={isLoading}/>
                <MoviesCardList movies={filterMovies}
                                savedMovies={savedMovies}
                                isSavedPage={isSavedPage}
                                isLoading={isLoading}
                                infoMovies={isInfo}
                                deleteMovies={deleteMovies}/>
            </main>
            <Footer/>
        </>
    )
}

export default SavedMovies;
