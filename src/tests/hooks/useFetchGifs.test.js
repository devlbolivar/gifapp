import React from 'react';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Prueba sobre el hook useFetchGifs', () => {
    const category = 'funny';

    test('debe de retornar el estado inicial', async()=>{

        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs(category));
        const {data, loading} = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe de retornar un arreglo de imágenes y loading en flase', async ()=>{
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs(category));
        await waitForNextUpdate();
        const {data, loading} = result.current;
    
        expect(data.length).toBe(16);
        expect(loading).toBe(false);
    });
});
