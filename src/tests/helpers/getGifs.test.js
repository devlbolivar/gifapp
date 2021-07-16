import React from 'react';
import { shallow } from 'enzyme';
import { getGifs } from '../../helpers/getGifs';

describe('Prueba sobre helper getGifs', () => {

    test('Debe de traer 10 elementos', async () => {
        const gifs = await getGifs('funny');
        expect(gifs.length).toBe(16);
    });

    test('Debe de traer 0 elementos', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});