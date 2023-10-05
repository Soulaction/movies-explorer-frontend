import './InfoMessage.css'
import success from '../../images/success.svg';
import error from '../../images/error.svg';
import {useEffect, useState} from "react";

const InfoMessage = ({isOpen, onClose, typeInfo, textInfo}) => {
    const [infoObject, setInfoObject] = useState({});

    useEffect(() => {
        function closePopupOnEsc(evt) {
            if (evt.key === 'Escape') {
                onClose();
            }
        }

        if (isOpen) {
            const infoObject = {};
            if (typeInfo === 'success') {
                infoObject.name = 'Успех';
                infoObject.textInfo = textInfo;
            }
            if (typeInfo === 'error') {
                infoObject.name = 'Ошибка';
                infoObject.textInfo = textInfo;
            }
            setInfoObject(infoObject);
            document.addEventListener('keydown', closePopupOnEsc);
            return () => {
                document.removeEventListener('keydown', closePopupOnEsc);
            }
        }
    }, [isOpen]);

    return (
        <div className={'info-modal' + (isOpen ? ' info-modal_opened' : '')}>
            <div className='info-modal__container'>
                <button className="info-modal__btn-close" type="button" onClick={onClose}
                        aria-label="Закрыть модальное окно"></button>
                <div className="info-modal__header">
                    <img className="info-modal__status-img" src={typeInfo === 'success' ? success : error} alt={typeInfo === 'success' ? 'Иконка успеха' : 'Икокнка ошибки'}/>
                    <h2 className="info-modal__status">{infoObject.name}</h2>
                </div>
                <p className="info-modal__text">{infoObject.textInfo}</p>
            </div>
        </div>
    )
}

export default InfoMessage;
