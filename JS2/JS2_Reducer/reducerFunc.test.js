const fn = require("./reducerFunc")

describe('sum function', () => {
    it('should return 0 for an empty array', () => {
        const result = fn.sum([])
        expect(result).toEqual(0)
    })
    it('should return negative for array of negative numbers', () => {
        const result = fn.sum([-2, -3])
        expect(result).toEqual(-5)
    })
    it('should add up array with negative and postive numbers', () => {
        const result = fn.sum([-20, -3, 20])
        expect(result).toEqual(-3)
    })
})

describe('largest function', () => {
    it('should find the largest number in the array', () => {
        const result = fn.largest([9,8,16,2,3])
        expect(result).toEqual(16)
    })
    it('should return 0 since given array is empty', () => {
        const result = fn.largest([])
        expect(result).toEqual(0)
    })
    it('should return first index of array if all numbers are same', () => {
        const result = fn.largest([10,10,10,10])
        expect(result).toEqual(10)
    })
})

describe('longest function', () => {
    it('should find the longest string at the end of the array', () => {
        const result = fn.longest(["Thor", "Loki", "Rocket", "Ant-Man"])
        expect(result).toEqual("Ant-Man")
    })
    it('should find the longest string in the middle of the array', () => {
        const result = fn.longest(["Thor", "Spiderman", "Ant-Man"])
        expect(result).toEqual("Spiderman")
    })
    it('should return string from array of length 1', () => {
        const result = fn.longest(["Wasp"])
        expect(result).toEqual("Wasp")
    })
})

describe('matches function', () => {
    it('should match elements in various positions', () => {
        const result = fn.matches(["Thor", "Loki", "Ant-Man", "Loki"], "Loki")
        expect(result).toEqual(2)
    })
    it('should match concurrent elements', () => {
        const result = fn.matches(["Spiderman", "Spiderman", "Mary Jane"], "Spiderman")
        expect(result).toEqual(2)
    })
    it('should return 0 if no matches', () => {
        const result = fn.matches(["Thor", "Loki", "Ant-Man"], "Wonder Woman")
        expect(result).toEqual(0)
    })
    it('should return 0 if for an empty array', () => {
        const result = fn.matches([], "Thor")
        expect(result).toEqual(0)
    })
})

describe('combineLess5 function', () => {
    it('should combine strings in various positions', () => {
        const arr = ["Thor", "Loki", "Ant-Man", "Rocket", "Wasp"]
        const result = fn.combineLess5(arr)
        expect(result).toEqual("ThorLokiWasp")
    })
    it('should return one element with length < 5', () => {
        const arr = ["Spiderman", "Loki", "Ant-Man", "Rocket"]
        const result = fn.combineLess5(arr)
        expect(result).toEqual("Loki")
    })
    it('should return empty string if no matching elements', () => {
        const arr = ["Black Panther", "Doctor Strange", "Captain Marvel"]
        const result = fn.combineLess5(arr)
        expect(result).toEqual("")
    })
})

describe('combineLess5 function', () => {
    it('should combine strings in various positions', () => {
        const arr = ["Thor", "Loki", "Ant-Man", "Rocket", "Wasp"]
        const result = fn.combineLess5(arr)
        expect(result).toEqual("ThorLokiWasp")
    })
    it('should return one element with length < 5', () => {
        const arr = ["Spiderman", "Loki", "Ant-Man", "Rocket"]
        const result = fn.combineLess5(arr)
        expect(result).toEqual("Loki")
    })
    it('should return empty string if no matching elements', () => {
        const arr = ["Black Panther", "Doctor Strange", "Captain Marvel"]
        const result = fn.combineLess5(arr)
        expect(result).toEqual("")
    })
})

describe('largerThan5 function', () => {
    it('should find numbers larger than 5 from various positions', () => {
        const result = fn.largerThan5([5, 9, 2, 6, 5])
        expect(result).toEqual([9, 6])
    })
    it('should find concurrent numbers larger than 5', () => {
        const result = fn.largerThan5([8, 8, 2, 3, 10])
        expect(result).toEqual([8, 8, 10])
    })
    it('should return empty array if no numbers larger than 5', () => {
        const result = fn.largerThan5([1, 2, 3, 4, 5])
        expect(result).toEqual([])
    })
})