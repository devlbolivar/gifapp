import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export  const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch', 'Samurai', 'Dragon ball']);

    // const handleAdd = () =>{
    //     setCategories([...categories, 'prueba']);
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map((categorie) => <li key={categorie}>{categorie}</li>)
                }
            </ol>
        </div>
    );
}