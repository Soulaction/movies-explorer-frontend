import {useCallback, useState} from "react";

export function useFormWithValidation(initObject) {
    const [values, setValues] = useState(initObject);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (event, field) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        target.setCustomValidity('');
        setValues({...values, [name]: value});
        if (!target.checkValidity()) {
            if (field === 'name' && !target.validity.valueMissing) {
                target.setCustomValidity('Имя должно содержать только латиницу, кириллицу, пробел или дефис');
            } else if (field === 'email' && !target.validity.valueMissing) {
                target.setCustomValidity('Email не соответствует шаблону электронной почты');
            }
        }
        setErrors({...errors, [name]: target.validationMessage});
        setIsValid(target.closest('form').checkValidity());
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return {values, handleChange, errors, isValid, resetForm};
}
