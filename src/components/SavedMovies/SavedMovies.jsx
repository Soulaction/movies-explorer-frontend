import './SavedMovies.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = () => {
    return (
        <>
            <Header/>
            <main className="save-movies">
                <SearchForm/>
                <MoviesCardList/>
            </main>
            <Footer/>
        </>
    )
}

export default SavedMovies;
