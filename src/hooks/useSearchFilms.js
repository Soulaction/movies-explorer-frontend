import {useEffect, useState} from "react";

export function useSearchFilms(movies, isSavedPage) {
    const [filterMovies, setFilterMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useState({
        savedFilms: [],
        savedSort: false,
        savedSearchString: ''
    })

    useEffect(() => {
        if(isSavedPage) {
            setFilterMovies(movies);
        } else {
            const savedSearchParams = JSON.parse(localStorage.getItem('searchParams'));
            if(savedSearchParams) {
                setSearchParams(savedSearchParams);
                setFilterMovies(savedSearchParams.savedFilms);
            } else {
                setFilterMovies([]);
            }
        }
    }, [movies])

    const handleFilterFilms = (searchText, isShort) => {
        setIsLoading(true);
        let findMovies = [];
        if (isShort) {
            findMovies = movies.filter(movie => {
                return ((movie.nameRU.toUpperCase().includes(searchText.toUpperCase()) || movie.nameEN.toUpperCase().includes(searchText.toUpperCase())) && movie.duration < 40);
            });
        } else {
            findMovies = movies.filter(movie => {
                return movie.nameRU.toUpperCase().includes(searchText.toUpperCase()) || movie.nameEN.toUpperCase().includes(searchText.toUpperCase());
            });
        }
        setTimeout(() => {
            localStorage.setItem('searchParams', JSON.stringify({savedFilms: findMovies, savedSort: isShort, savedSearchString: searchText}));
            setIsLoading(false);
            setFilterMovies(findMovies);
        }, 1000)
    }

    return {filterMovies, isLoading, searchParams, handleFilterFilms};
}
