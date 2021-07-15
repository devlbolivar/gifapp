import React from 'react';
import { shallow } from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';

describe('Prueba inicial del componente <GifGridItem />', () => {
    
    const title = 'Título de prueba';
    const url = 'https://urldeprueba.com';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    
    test('Debe mostrar <GifGridItem /> correctamente', () =>{
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un párrafo con  el title', () =>{
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('Debe de tener la img igual al url y alt de los props', () =>{
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe de tener animate__fadeIn', () =>{
        const div = wrapper.find('div');
        //console.log(div.props());
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
    });
});