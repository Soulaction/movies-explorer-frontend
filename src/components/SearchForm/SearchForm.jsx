import './SearchForm.css'
import findIcon from '../../images/find-icon.png'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {useState} from "react";

const SearchForm = ({searchFilms}) => {
    const [errorText, setErrorText] = useState('');
    const [searchText, setSearchText] = useState('');

    const search = (evt) => {
        evt.preventDefault();
        if(!searchText) {
            setErrorText('Нужно ввести ключевое слово');
        } else {
            setErrorText('');
            searchFilms();
        }
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
                           value={searchText}
                           placeholder="Фильм"/>
                    <button className="search__button"
                            type="submit"
                            aria-label="Кнопка поиска">
                        <img className="search__button-icon" src={findIcon} alt="Иконка поиска"/>
                    </button>
                    <span className="search__text-error">{errorText}</span>
                </div>
                <FilterCheckbox/>
            </form>
        </section>
    )
}

export default SearchForm;
