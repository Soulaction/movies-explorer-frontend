import './SavedMovies.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = ({deleteMovies, savedMovies}) => {
    return (
        <>
            <Header/>
            <main className="save-movies">
                <SearchForm/>
                <MoviesCardList movies={savedMovies}
                                savedMovies={savedMovies}
                                isSavedPage={true}
                                deleteMovies={deleteMovies}/>
            </main>
            <Footer/>
        </>
    )
}

export default SavedMovies;
