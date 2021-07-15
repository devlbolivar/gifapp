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
});