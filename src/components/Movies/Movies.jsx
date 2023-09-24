import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = () => {
    return (
        <>
            <Header/>
            <SearchForm/>
            <MoviesCardList/>
            <Footer/>
        </>
    )
}

export default Movies;
