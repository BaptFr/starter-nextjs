import { describe, expect, it, vi } from 'vitest';
import { sum } from './sum';


//mock pour que le test ne concerne que la fonction sum  pas la b.
vi.mock('./getNumber', () => ({
    getNumber: () => 12
}))

describe('sum utility function', () => {
    it('should correctly log the sum of two numbers' , () => {
        const a = 8 
        const res= sum(a)
        expect(res).toBe(20)

    })
})