import './SearchForm.css'
import findIcon from '../../images/find-icon.png'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const SearchForm = ({searchFilms, searchParams, isLoading}) => {
    const {pathname} = useLocation();
    const [errorText, setErrorText] = useState('');
    const [searchText, setSearchText] = useState('');
    const [isShort, setIsShort] = useState(false);

    useEffect(() => {
        if(pathname === '/movies') {
            setSearchText(searchParams.savedSearchString);
            setIsShort(searchParams.savedSort);
        }
    }, [searchParams])

    const search = (evt) => {
        evt.preventDefault();
        if(!searchText) {
            setErrorText('Нужно ввести ключевое слово');
        } else {
            setErrorText('');
            searchFilms(isShort, searchText);
        }
    }

    const handlerIsShorts = () => {
        setIsShort(oldType => !oldType)
        searchFilms(!isShort);
    }

    return (
        <section className="search">
            <form className="search__form"
                  name="search-form"
                  noValidate
                  onSubmit={(evt) => search(evt)}>
                <div className="search__text">
                    <input className="search__input"
                           name="search-text"
                           type="text"
                           onChange={evt => {
                               setSearchText(evt.target.value)
                           }}
                           disabled={isLoading}
                           value={searchText}
                           placeholder="Фильм"/>
                    <button className="search__button"
                            disabled={isLoading}
                            type="submit"
                            aria-label="Кнопка поиска">
                        <img className="search__button-icon" src={findIcon} alt="Иконка поиска"/>
                    </button>
                    <span className="search__text-error">{errorText}</span>
                </div>
                <FilterCheckbox changeIsShort={handlerIsShorts}
                                isLoading={isLoading}
                                isShort={isShort}/>
            </form>
        </section>
    )
}

export default SearchForm;
