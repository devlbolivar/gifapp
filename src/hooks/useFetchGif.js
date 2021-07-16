import { useState, useEffect } from 'react';
import { getGif } from '../helpers/getGif';

export const useFetchGif = () => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        getGif()
        .then(img => {
            setState({ 
                data: img,
                loading: false
            });
        });
    }, []);

    return state; 
}