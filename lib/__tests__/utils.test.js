import { describe, it, expect } from "vitest";
import { calculateDiscount } from '../utils';


describe("calculate the discount (unit test)", () => {
    it('calculates the discount correctly', () => {
        expect(calculateDiscount(100, 20)).toBe(80);
    })

    it('returns 0 for negative inputs', () => {
        expect(calculateDiscount(-100, 20)).toBe(0);
    })
})
