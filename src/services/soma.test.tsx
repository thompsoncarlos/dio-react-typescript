import { soma, multiplica } from './soma';

describe('soma', () => {
    it('Deve somar 1 ao número informado', () => {
        const value = soma(1);
        expect(value).toBe(2);
    })

    it('Deve multiplicar o número por dois', () => {
        const value = multiplica(2, 2);
        expect(value).toBe(4);
    })

    it('Deve multipliar o numero por 3', () => {
        const value = multiplica(2, 3);
        expect(value).toBe(6);
    })
    it('Deve informar um erro, com multiplicador diferente', () => {
        const value = multiplica(3, 4);
        expect(value).toBe('Multiplicador não aceito');
    })
})