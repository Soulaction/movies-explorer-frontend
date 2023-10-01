import './FilterCheckbox.css'

const FilterCheckbox = () => {
    return (
        <div className="checkbox">
        <div className="checkbox__container">
            <input className="checkbox-input" type="checkbox" id="shorts"/>
            <div className="checkbox-slider"></div>
            <label className="checkbox-label" htmlFor="shorts">Короткометражки</label>
        </div>
        </div>
    )
}

export default FilterCheckbox;
