import readFile from '../index.js';

describe('read file::', () => {
    it('Should be a function', () => {
        expect(typeof readFile).toBe('funcion');
    })
})