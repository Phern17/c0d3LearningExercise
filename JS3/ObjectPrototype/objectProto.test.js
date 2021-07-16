const fn = require("./objectProto")

describe('forEach function', () => {
    it('should run a function 3 times on 3 elements', () => {
        const fun = jest.fn()
        const info = {
            ironman: "arrogant",
            spiderman: "naive",
            hulk: "strong",
        }
        info.forEach(fun)
        expect(fun).toHaveBeenCalledTimes(3)
    })
    it('should run a function 0 times on an empty object', () => {
        const fun = jest.fn()
        const imEmpty = {}
        imEmpty.forEach(fun)
        expect(fun).not.toHaveBeenCalled()
    })
    it('should let functions access object values & positions', () => {
        const vals = []
        const fun = (_k, v, i) => {
            vals.push(i+v) 
        }
        const info = {
            ironman: "arrogant",
            spiderman: "naive",
            hulk: "strong",
        }
        info.forEach(fun)
        expect(vals).toEqual(["0arrogant", "1naive", "2strong"])
    })
})

describe('filter function', () => {
    const leaders = {
        vermilion: "Surge",
        cinnabar: "Blaine",
        fuchsia: "Koga",
        saffron: "Sabrina"
    }
    it('should filter based on keys', () => {
        const seven = (k) => {
            return k.length === 7
        }
        const result = leaders.filter(seven)
        expect(result).toEqual({fuchsia: "Koga", saffron: "Sabrina"})
    })
    it('should filter based on keys', () => {
        const six = (_k, v) => {
            return v.length < 6
        }
        const result = leaders.filter(six)
        expect(result).toEqual({vermilion: "Surge", fuchsia: "Koga"})
    })
    it('should return an empty object if no matches', () => {
        const celadon = (k) => {
            return k === "Celadon"
        }
        const result = leaders.filter(celadon)
        expect(result).toEqual({})
    })
})

describe('reduce function', () => {
    it('should let functions access keys, values, & positions', () => {
        const fun = (acc, key, value, i) => {
            return acc + `${key}-${i}-${value},`
        }
        const info = {
            ironman: "arrogant",
            spiderman: "naive",
            hulk: "strong",
        }
        const result = info.reduce(fun, "")
				const exp = "ironman-0-arrogant,spiderman-1-naive,hulk-2-strong,"
        expect(result).toEqual(exp)
    })
    it('should return the starting value if the object is empty', () => {
        const imEmpty = {}
        const result = imEmpty.reduce(() => {}, "I am Groot")
        expect(result).toEqual("I am Groot")
    })
})

describe('getMostCommon function', () => {
    it('should return a number as the most common', () => {
        const result = [9,8,7,8,7,7,7].getMostCommon()
        expect(result).toEqual(7)
    })
    it('should return a string as the most common', () => {
				const arr =  ["Batman", 8,7, "Batman", "Robin"]
        const result = arr.getMostCommon()
        expect(result).toEqual("Batman")
    })
    it('should return first element if all equally common', () => {
        const types = ["grass", "poison", "fire", "flying", "water", "bug"]
        const result = types.getMostCommon()
        expect(result).toEqual("grass")
    })
    it('should return null on an empty array', () => {
        const result = [].getMostCommon()
        expect(result).toEqual(null)
    })
})

describe('removeDupes function', () => {
    it('should remove 2 sets of duplicate numbers', () => {
        const data = [9,8,7,8,7,7,7]
        console.log(data.removeDupes())
        expect(data).toEqual([9])
    })
    it('should remove 1 set of duplicate strings', () => {
        const data = ["ice", "electric", "psychic", "ice", "ground", "ice"]
        data.removeDupes()
        expect(data).toEqual(["electric", "psychic", "ground"])
    })
    it('should remove duplicate boolean values', () => {
        const data = ["grass", false, "poison", "electric", false]
        data.removeDupes()
        expect(data).toEqual(["grass", "poison", "electric"])
    })
    it('shouldn\'t remove anything from an array with no dups', () => {
        const data = ["Pewter", "Saffron", "Vermilion", "Veridian"]
        data.removeDupes()
        expect(data).toEqual(["Pewter", "Saffron", "Vermilion", "Veridian"])
    })
    it('should leave an empty array unchanged', () => {
        const data = []
        data.removeDupes()
        expect(data).toEqual([])
    })
})