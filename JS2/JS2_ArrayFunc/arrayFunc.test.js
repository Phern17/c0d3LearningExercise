const fn = require("./arrayFunc")

describe('copyArray function', () => {
    it('should copy an array of 3 elements', () => {
        const result = fn.copyArray([-5, -23, "study"])
        expect(result).toEqual([-5, -23, "study"])
    })
    it('should not modify original array', () => {
        const original = ["hi", 1, ()=>{return 5}, "apple", 45]
        const result = fn.copyArray(original)
        original[0] = "Drax"
        expect(result[0]).toEqual("hi")
    })
    it('should copy an empty array', () => {
        const result = fn.copyArray([])
        expect(result).toEqual([])
    })
})

describe('remove function', () => {
    it('should not remove anything', () => {
        const data = ["Rocket", "Groot", "Star-Lord"]
        const result = fn.removeElement(data, 'Random')
        expect(result).toEqual(["Rocket", "Groot", "Star-Lord"])
    })
    it('should remove 1 element', () => {
        const data = ["Rocket", "Groot", "Star-Lord"]
        const result = fn.removeElement(data, 'Star-Lord')
        expect(result).toEqual(["Rocket", "Groot"])
    })
    it('should remove all elements', () => {
        const data = ["Rocket", "Rocket", "Rocket"]
        const result = fn.removeElement(data, 'Rocket')
        expect(result).toEqual([])
    })
})

describe('copyWithout function', () => {
    it('should copy without 2 middle elements', () => {
        const result = fn.copyWithout([5, 2, 2, 9], 2)
        expect(result).toEqual([5, 9])
    })
    it('should not modify original array', () => {
        const arr = [5, 2, 2, 9]
        fn.copyWithout(arr, 2)
        expect(arr).toEqual([5, 2, 2, 9])
    })
    it('should copy without last 2 elements', () => {
        const result = fn.copyWithout([2, 2, 2, 3, 3], 3)
        expect(result).toEqual([2, 2, 2])
    })
    it('should return identical array if no matches', () => {
        const result = fn.copyWithout([2, 6, 4], 3)
        expect(result).toEqual([2, 6, 4])
    })
})

describe('copyReverse function', () => {
    it('should reverse copy an array of 4 elements', () => {
        const result = fn.copyReverse([1, 3, 5, 7])
        expect(result).toEqual([7, 5, 3, 1])
    })
    it('should not modify original array', () => {
        const arr = [1, 3, 5, 7]
        fn.copyReverse(arr)
        expect(arr).toEqual([1, 3, 5, 7])
    })
    it('should reverse copy an array of 1 element', () => {
        const result = fn.copyReverse(["bears"])
        expect(result).toEqual(["bears"])
    })
})

describe('copyLast function', () => {
    const heroes = ["Ironman", "Thor", "Captain", "Black Widow", "Hulk"]
    const original = [...heroes]
    it('should skip the first 2 elements', () => {
        const result = fn.copyLast(heroes, 2)
        expect(result).toEqual(["Captain", "Black Widow", "Hulk"])
    })
    it('should not modify original array', () => {
        fn.copyLast(heroes, 2)
        expect(heroes).toEqual(original)
    })
    it('should skip the first 0 elements (copy whole array)', () => {
        const result = fn.copyLast(heroes, 0)
        expect(result).toEqual(heroes)
    })
    it('should return empty array if skipping past array length', () => {
        const result = fn.copyLast(heroes, 6)
        expect(result).toEqual([])
    })
})

describe('copyFirst function', () => {
    const heroes = ['Ironman', 'Thor', 'Captain', 'Black Widow', 'Hulk']
    const original = [...heroes]
    it('should skip the last 2 elements', () => {
      const result = fn.copyFirst(heroes, 2)
      expect(result).toEqual(['Ironman', 'Thor', 'Captain'])
    })
    it('should not modify original array', () => {
      fn.copyFirst(heroes, 2)
      expect(heroes).toEqual(original)
    })
    it('should skip the last 0 elements (copy whole array)', () => {
      const result = fn.copyFirst(heroes, 0)
      expect(result).toEqual(heroes)
    })
    it('should return empty array if skipping past array length', () => {
      const result = fn.copyFirst(heroes, 6)
      expect(result).toEqual([])
    })
  })

  describe('copyWithCall function', () => {
    const heroes = ["Ironman", "Thor", "Captain"]
    const thanos = () => {
        return "Thanos"
    }
    it('should call a function with two arguments', () => {
        const result = fn.runOnEach ([1,2,3,4,5], (e, i) => {
            return e + i
        })
        expect(result).toEqual([1, 3, 5, 7, 9])
    })
    it('should not modify original array', () => {
        const original = [...heroes]
        fn.runOnEach(heroes, thanos)
        expect(heroes).toEqual(original)
    })
    it('should call a function with no arguments', () => {
        const result = fn.runOnEach(heroes, thanos)
        expect(result).toEqual(["Thanos", "Thanos", "Thanos"])
    })
})

describe('onlyIndex function', () => {
    const someNumbers = [
        [1,2,3,4,5],
        [6,9,8,7,6],
        [4,5,6,6,7],
        [0,1,2,3,4]
    ]
    it('should not modify the original array', () => {
        const original = [...someNumbers]
        fn.onlyIndex(someNumbers, 2)
        expect(someNumbers).toEqual(original)
    })
    it('should pull out the element at index 2', () => {
        const result = fn.onlyIndex(someNumbers, 2)
        expect(result).toEqual([3, 8, 6, 2])
    })
    it('should pull out the element at index 0', () => {
        const result = fn.onlyIndex(someNumbers, 0)
        expect(result).toEqual([1, 6, 4, 0])
    })
})