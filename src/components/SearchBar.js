import React from 'react';
import { AddCategory } from './AddCategory';

export const SearchBar = ({setCategories}) => {
    return (
        <div>
            <AddCategory setCategories={setCategories} />
        </div>
    )
}
