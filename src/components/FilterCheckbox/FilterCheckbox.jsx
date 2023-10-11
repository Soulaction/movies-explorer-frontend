import './FilterCheckbox.css'

const FilterCheckbox = ({changeIsShort, isShort, isLoading}) => {
    return (
        <div className="checkbox">
        <div className="checkbox__container">
            <input className="checkbox-input"
                   onChange={(evt) => changeIsShort(evt.target.value)}
                   checked={isShort}
                   disabled={isLoading}
                   type="checkbox" id="shorts"/>
            <div className="checkbox-slider"></div>
            <label className="checkbox-label" htmlFor="shorts">Короткометражки</label>
        </div>
        </div>
    )
}

export default FilterCheckbox;
