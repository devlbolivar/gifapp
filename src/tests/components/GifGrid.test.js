import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Prueba sobre el componente <GifGrid />', ()=>{
    
    const category = 'funny';
    
    test('Debe renderizar el componente correctamente', ()=>{
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid key={category} category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    // test('Debe de mostrar items cuando se cargan imágenes con el useFetchGifs', ()=>{

    //     const gifs = [{
    //         it: 'abc',
    //         url: 'https://prueba.com',
    //         title: 'Prueba'
    //     }]
    //     useFetchGifs.mockReturnValue({
    //         data: gifs,
    //         loading: false
    //     });

    //     const wrapper = shallow(<GifGrid key={category} category={category} />);

    //     expect(wrapper).toMatchSnapshot();

    // });
});