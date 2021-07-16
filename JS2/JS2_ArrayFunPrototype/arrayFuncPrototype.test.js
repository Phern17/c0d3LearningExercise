const fn = require("./arrayFuncPrototype")

describe('getEvens function', () => {
    it('should pull even numbers from various positions', () => {
        const result = [9, 80, 11, 2].getEvens()
        expect(result).toEqual([80, 2])
    })
    it('should pull even numbers from concurrent positions', () => {
        const result = [2, 4, 6, 7, 8].getEvens()
        expect(result).toEqual([2, 4, 6, 8])
    })
    it('should have no result if no evens', () => {
        const result = [1, 3, 9, 21].getEvens()
        expect(result).toEqual([])
    })
})

describe('sum function', () => {
    it('should find sum of an array of numbers', () => {
        const result = [2, 17, 3, -3].sum()
        expect(result).toEqual(19)
    })
    it('should add strings together', () => {
        const data = ["<p>", "<img src='https://placebear.com/800/710'>", "</p>"]
        const result = data.sum()
        expect(result).toEqual("<p><img src='https://placebear.com/800/710'></p>")
    })
    it('should return 0 for an empty array', () => {
        const result = [].sum()
        expect(result).toEqual(undefined)
    })
})

describe('pad function', () => {
    it('should modify the original array', () => {
        const arr = ["Doctor"]
        arr.pad(1, "Strange")
        expect(arr).toEqual(["Doctor", "Strange"])
    })
    it('should pad multiple times', () => {
        const arr = ["<button name='submit'></button>", "<div></div>"]
        arr.pad(2, "<br/>")
        expect(arr).toEqual(["<button name='submit'></button>", "<div></div>", "<br/>", "<br/>"])
    })
    it('should return same array when given negative pad number', () => {
        const result = ["Quill", "Gamora"].pad(-2, "Drax")
        expect(result).toEqual(["Quill", "Gamora"])
    })
    it('should return same array when given zero pad number', () => {
        const result = ["Quill", "Gamora"].pad(0, "Drax")
        expect(result).toEqual(["Quill", "Gamora"])
    })
})

describe('fizzbuzz function', () => {
    it('should change numbers divisible by 3 to fizz', () => {
        const magicNumbers = [1, 2, 3, 6, 19, 18]
        magicNumbers.fizzbuzz()
        expect(magicNumbers).toEqual([1, 2, "fizz", "fizz", 19, "fizz"])
    })
    it('should change numbers divisible by 5 to buzz', () => {
        const magicNumbers = [1, 2, 5, 10, 11]
        magicNumbers.fizzbuzz()
        expect(magicNumbers).toEqual([1, 2, "buzz", "buzz", 11])
    })
    it('should change numbers divisible by 15 to fizzbuzz', () => {
        const magicNumbers = [1, 2, 4, 15, 16, 30]
        magicNumbers.fizzbuzz()
        expect(magicNumbers).toEqual([1, 2, 4, "fizzbuzz", 16, "fizzbuzz"])
    })
    it('should correctly change 3 to fizz, 5 to buzz, and 15 to fizzbuzz', () => {
        const magicNumbers = [9, 80, 12, 2, 30]
        magicNumbers.fizzbuzz()
        expect(magicNumbers).toEqual(["fizz", "buzz", "fizz", 2, "fizzbuzz"])
    })
})

describe('removeEvens function', () => {
    it('should remove even numbers from various positions', () => {
        const arr = [9, 80, 11, 2]
        arr.removeEvens()
        expect(arr).toEqual([9, 11])
    })
    it('should remove even numbers from concurrent positions', () => {
        const arr = [2, 4, 6, 7, 8]
        arr.removeEvens()
        expect(arr).toEqual([7])
    })
    it('should leave array the same if no evens', () => {
        const arr = [1, 3, 9, 21]
        arr.removeEvens()
        expect(arr).toEqual([1, 3, 9, 21])
    })
    it('should leave empty array the same', () => {
				const arr = []
				arr.removeEvens()
        expect(arr).toEqual([])
    })
})

describe('getIterator function', () => {
    it('should iterate through 3 elements', () => {
        const iterate = ["PayPal", "Google", "Netflix"].getIterator()
        expect(iterate()).toEqual("PayPal")
        expect(iterate()).toEqual("Google")
        expect(iterate()).toEqual("Netflix")
    })
    it('should return to beginning once done', () => {
        const iterate = [9, 80, 12, 2].getIterator()
        expect(iterate()).toEqual(9)
        expect(iterate()).toEqual(80)
        expect(iterate()).toEqual(12)
        expect(iterate()).toEqual(2)
        expect(iterate()).toEqual(9) 
        expect(iterate()).toEqual(80)
    })
    it('should return undefined for empty array iterator', () => {
        const iterate = [].getIterator()
        expect(iterate()).toEqual(undefined)
    })
    it('should iterate through one element', () => {
        const iterate = ["Ironman"].getIterator()
        expect(iterate()).toEqual("Ironman")
        expect(iterate()).toEqual("Ironman")
    })
})