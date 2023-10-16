import {useEffect, useState} from "react";

export function useSearchFilms(movies, isSavedPage, infoMovies) {
    const [filterMovies, setFilterMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isInfo, setIsInfo] = useState('');
    const [searchRow, setSearchRow] = useState('');
    const [searchParams, setSearchParams] = useState({
        savedFilms: [],
        savedSort: false,
        savedSearchString: ''
    })

    useEffect(() => {
        if(isSavedPage) {
            if(filterMovies.length === 0) {
                setFilterMovies(movies);
            } else {
                setFilterMovies(movies.filter(mv => filterMovies.some(fmv => mv._id === fmv._id)));
            }
        } else {
            const savedSearchParams = JSON.parse(localStorage.getItem('searchParams'));
            if(savedSearchParams) {
                setSearchParams(savedSearchParams);
                setFilterMovies(savedSearchParams.savedFilms);
            } else {
                setFilterMovies([]);
            }
        }
        console.log(filterMovies);
    }, [movies, isSavedPage])

    const handleFilterFilms = (isShort, searchText) => {
        if(infoMovies) {
            setIsInfo(infoMovies);
            return;
        }
        let findText = '';
        if(searchText) {
            findText = searchText;
            setSearchRow(searchText);
        } else {
            const savedSearchParams = JSON.parse(localStorage.getItem('searchParams'));
            findText = searchRow ? searchRow : savedSearchParams.savedSearchString ? savedSearchParams.savedSearchString : '';
        }
        setIsLoading(true);
        let findMovies = [];
        if (isShort) {
            findMovies = movies.filter(movie => {
                return ((movie.nameRU.toUpperCase().includes(findText.toUpperCase()) || movie.nameEN.toUpperCase().includes(findText.toUpperCase())) && movie.duration < 40);
            });
        } else {
            findMovies = movies.filter(movie => {
                return movie.nameRU.toUpperCase().includes(findText.toUpperCase()) || movie.nameEN.toUpperCase().includes(findText.toUpperCase());
            });
        }

        if(findMovies.length === 0) {
            setIsInfo('Ничего не найдено')
        } else {
            setIsInfo('')
        }

        setTimeout(() => {
            if (!isSavedPage) {
                localStorage.setItem('searchParams', JSON.stringify({savedFilms: findMovies, savedSort: isShort, savedSearchString: findText}));
            }
            setIsLoading(false);
            setFilterMovies(findMovies);
        }, 1000)
    }

    return {filterMovies, isLoading, searchParams, handleFilterFilms, isInfo};
}
