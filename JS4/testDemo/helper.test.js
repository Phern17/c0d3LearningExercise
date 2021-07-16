const func = require('./helpers')

describe('sumAll function', ()=> {
    it('should add numbers', ()=> {
        const result = func.sumAll([9, 8, 7])

        expect(result).toEqual(24)
    }),

    it('should add negative numbers', ()=> {
        const result = func.sumAll([-1, -2, -3])

        expect(result).toEqual(-6)
    })

    it('should return 0 for empty array', ()=> {
        const result = func.sumAll([])

        expect(result).toEqual(null)
    })

    it('should not motify original array', ()=> {
        const originalArr = ["hello", "boi"]
        const result = func.sumAll(originalArr)
        expect(result).toEqual("helloboi")
        expect(originalArr).toEqual(["hello", "boi"])

    })
})

describe('findLargest function', ()=> {
    it('should return the largest number', ()=> {
        const result = func.findLargest([0, 7, 9])
        expect(result).toEqual(9)
    })

    it('should return the largest number when all numbers are negative', ()=> {
        const result = func.findLargest([-4, -1, -9])
        expect(result).toEqual(-1)
    })

    it('should return null when array is empty', ()=> {
        const result = func.findLargest([])
        expect(result).toEqual(null)
    })
})