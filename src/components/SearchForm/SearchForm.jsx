import './SearchForm.css'
import findIcon from '../../images/find-icon.png'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
    return (
        <section className="search">
            <form className="search__form" name="search-form" noValidate>
                <div className="search__text">
                    <input className="search__input" name="search-text" type="text" placeholder="Фильм"/>
                    <button className="search__button" type="submit" aria-label="Кнопка поиска">
                        <img className="search__button-icon" src={findIcon} alt="Иконка поиска"/>
                    </button>
                </div>
                <FilterCheckbox/>
            </form>
        </section>
    )
}

export default SearchForm;
