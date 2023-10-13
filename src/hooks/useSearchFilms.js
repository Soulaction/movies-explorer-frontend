import {useEffect, useState} from "react";

export function useSearchFilms(movies, isSavedPage, infoMovies) {
    const [filterMovies, setFilterMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isInfo, setIsInfo] = useState('');
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
        if(infoMovies) {
            setIsInfo(infoMovies);
            return;
        }
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

        if(findMovies.length === 0) {
            setIsInfo('Ничего не найдено')
        } else {
            setIsInfo('')
        }

        setTimeout(() => {
            localStorage.setItem('searchParams', JSON.stringify({savedFilms: findMovies, savedSort: isShort, savedSearchString: searchText}));
            setIsLoading(false);
            setFilterMovies(findMovies);
        }, 1000)
    }

    return {filterMovies, isLoading, searchParams, handleFilterFilms, isInfo};
}
