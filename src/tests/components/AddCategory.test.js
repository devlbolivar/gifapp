import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Test en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(()=>{ 
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe de mostrarse correctamente <AddCategory />', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar el valor del input', () =>{
        const input = wrapper.find('input');
        const value = 'Prueba input';
        input.simulate('change', { target: { value }});
    });

    test('No debe de postear informacion', () =>{
        wrapper.find('form').simulate('submit', {preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', ()=>{
        const value = 'Prueba input change'
        const input =  wrapper.find('input');

        input.simulate('change',{ target: { value }} );
        wrapper.find('form').simulate('submit', {preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.prop('value').trim()).toBe('');
    });
});