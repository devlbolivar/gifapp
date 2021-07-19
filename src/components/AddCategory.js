import React,{useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(categories => [ inputValue,...categories]);
            setInputValue('');
        }

    }


    return (
        <form className="form__search__bar" onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                placeholder="Add category"
                onChange={handleInputChange}
            />
            <button>ok</button>
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}