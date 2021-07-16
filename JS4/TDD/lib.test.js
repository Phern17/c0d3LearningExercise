const lib = require("./lib")

describe('tokenize Function', ()=> {
  it('should return an object with correct number of value for each key', ()=> {
    const result = lib.tokenize("hello world")
    expect(result).toEqual({"HELLO": 1, "WORLD": 1})
  })

  it('should ignore word shorter than 3 character', ()=> {
    const obj2 = lib.tokenize('I like (Korean)')
    expect(obj2).toEqual({"LIKE": 1, "(KOREAN)": 1})
  })

  it('should return an empty object', ()=> {
    const obj3 = lib.tokenize('')
    expect(obj3).toEqual({})
  })

  it('should ignore any integer', ()=> {
    const obj4 = lib.tokenize('00')
    expect(obj4).toEqual({})
  })


})

describe("makeTrainingData function", ()=> {
  it('should return an empty array', ()=> {
    const result1 = lib.makeTrainingData({})
    expect(result1).toEqual([])
  })

  it('should ignore integer as key', ()=> {
    const result2 = lib.makeTrainingData({
      'beef boneless 100': 'MEAT'
    })

    expect(result2).toEqual([
      { input: { BEEF: 1, BONELESS: 1 }, output: { MEAT: 1 }}
    ])
  })

  it('should have 2 element inside the output array', ()=> {
    const result3 = lib.makeTrainingData({
      'beef boneless 100': 'MEAT',
      'pink apples': 'VEGGIE'
    })

    expect(result3).toEqual([
      {input: {BEEF: 1, BONELESS: 1}, output: {MEAT: 1}},
      {input: {PINK: 1, APPLES: 1}, output: {VEGGIE: 1}}
    ])
  })

  }
)

describe('pushAll function', ()=> {
  it('should not modify the data with no key', ()=> {
    let data1 = {}
    lib.pushAll(data1, [9, 8, 7])
    expect(data1).toEqual({})
  })  

  it("should have an array inside current object's value", ()=> {
    let data2 = { blah: [] }
    lib.pushAll(data2, [9, 8, 7])
    expect(data2).toEqual({ blah: [ [9, 8, 7] ] })
  })

  it("should have the same array inside current object's keys", ()=> {
    let data3 = { blah: [ [1, 3] ], bluh: [] }
    lib.pushAll(data3, [9, 8, 7])
    expect(data3).toEqual( { blah: [ [1, 3], [9, 8, 7] ], bluh: [ [9, 8, 7] ] })
  })
})

describe('getMostLikely function', ()=> {
  it('should return null if input object is empty', ()=> {
    const data1 = {}
    const result = lib.getMostLikely(data1)
    expect(result).toEqual(null)
  })

  it('should return the key string with highest value', ()=> {
    const data2 = {
      meat: 0.987,
      veggie: 0.187,
      store: 0.287
    }

    const result = lib.getMostLikely(data2)
    expect(result).toEqual("meat")
  })
})