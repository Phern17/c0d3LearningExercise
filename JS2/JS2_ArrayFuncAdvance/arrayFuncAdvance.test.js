const fn = require("./arrayFuncAdvance")

describe('noMoreEvens function', () => {
    it('should remove evens from an array with a mix of numbers', () => {
        const result = fn.noMoreEvens([1, 2, 6, 4, 5])
        expect(result).toEqual([1,5])
    })
    it('should remove all numbers when even', () => {
        const result = fn.noMoreEvens([2, 16, 40, 52])
        expect(result).toEqual([])
    })
    it('should not touch an array of all odd numbers', () => {
        const result = fn.noMoreEvens([1, 571, 3, 9])
        expect(result).toEqual([1, 571, 3, 9])
    })
    it('should remove negative even numbers as well', () => {
        const result = fn.noMoreEvens([-2, -571, -4])
        expect(result).toEqual([-571])
    })
})

describe('remove empty function', () => {
    it('should return [] when array is empty', () => {
        const result = fn.removeEmpty([])
        expect(result).toEqual([])
    })
    it('should return [] when array only has empty strings', () => {
        const result = fn.removeEmpty(["","",""])
        expect(result).toEqual([])
    })
    it('should return same array when array has no empty strings', () => {
        const result = fn.removeEmpty(["hello","world"])
        expect(result).toEqual(["hello","world"])
    })
    it('should return array without empty strings', () => {
        const result = fn.removeEmpty(["hello", "world", "", "name", "", "is"])
        expect(result).toEqual(["hello","world", "name", "is"])
    })
})

describe('primesOnly function', () => {
    it('should return empty array if no primes', () => {
        const result = fn.primesOnly([-13, 0, 1, 4, 6])
        expect(result).toEqual([])
    })
    it('should return an identical array if all are prime', () => {
        const result = fn.primesOnly([2, 17, 1601, 7919])
        expect(result).toEqual([2, 17, 1601, 7919])
    })
})

describe('firstPrime function', () => {
    it('should find a prime at the beginning of the array', () => {
        const result = fn.firstPrime([2, 17, 1601, 7919])
        expect(result).toEqual(2)
    })
    it('should find a prime at the end of the array', () => {
        const result = fn.firstPrime([1, 4, 16, 7919])
        expect(result).toEqual(7919)
    })
    it('should find no primes in an empty array', () => {
        expect(fn.firstPrime([])).toEqual(undefined)
    })
})