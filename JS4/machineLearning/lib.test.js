const fun = require('./lib')

describe('makeTrainingData', () => {
    it('should turn {} to empty array', () => {
      const result = fun.makeTrainingData({})
      expect(result).toEqual([])
    })
    it('should turn 1 data to array of input/output', () => {
      const result = fun.makeTrainingData({
        'beef boneless 100': 'MEAT'
      })
      expect(result).toEqual([{
        input: {
          BEEF: 1,
          BONELESS: 1
        },
        output: {
          MEAT: 1
        }
      }])
    })
    it('should turn 2 data to array of input/output', () => {
      const result = fun.makeTrainingData({
        'beef boneless 100': 'MEAT',
        'pink apples': 'VEGGIE'
      })
      expect(result).toEqual([{
        input: {
          BEEF: 1,
          BONELESS: 1
        },
        output: {
          MEAT: 1
        }
      }, {
        input: {
          PINK: 1,
          APPLES: 1
        },
        output: {
          VEGGIE: 1
        }
      }])
    })
  })

// describe('getDataFromExcel function', ()=> {
//     it('should return an array of objects that represent each row in the file', ()=> {
        
//     })
// })

describe('pushAll function', ()=> {
    it('should return empty object', ()=> {
        let data = {}
        fun.pushAll(data, [9, 8, 7])
        expect(data).toEqual({})
    })

    it('should push the array into the key', ()=> {
        const data = {blah: [['hello']]}
        fun.pushAll(data, [9, 8, 7])
        expect(data).toEqual({
            blah: [['hello'], [9, 8, 7]]
        })
    })

    it('should push array into object with 2 keys with different array values', ()=> {
        const data = {
            blah: [['hello']],
            key2: []
        }

        fun.pushAll(data, [9, 8, 7])
        expect(data).toEqual({
            blah: [['hello'], [9, 8, 7]],
            key2: [[9, 8, 7]]
        })

    })
})

describe('tokenize function', ()=> {
    it('should tokenize a string', ()=> {
        const sampleString = "sample string"
        const trueValue = {
            SAMPLE: 1,
            STRING: 1
        }

        const funOutput = fun.tokenize(sampleString)
        expect(funOutput).toEqual(trueValue)
    })

    it('should ignore 2 or less characters string', ()=> {
        const sampleString = "sample string ye"
        const trueValue = {
            SAMPLE: 1,
            STRING: 1
        }

        const funOutput = fun.tokenize(sampleString)
        expect(funOutput).toEqual(trueValue)
    })

    it('should tokenize "00" to an empty object', ()=> {
        const obj = fun.tokenize('00')
        expect(obj).toEqual({})
    })
})

describe('getMostLikely function', ()=> {
    it('should return null if {} is input', ()=> {
        const result = fun.getMostLikely({})
        expect(result).toEqual(null)
    })

    it('should return first key', ()=> {
        const result = fun.getMostLikely({
            meat: 0.987,
            veggie: 0.187,
            store: 0.287
        })
        expect(result).toEqual('meat')
    })

    it('should return last key', ()=> {
        const result = fun.getMostLikely({
            meat: 0.11,
            veggie: 0.22,
            store: 0.33
        })
        expect(result).toEqual('store')
    })

})

// describe('createExcel function', ()=> {
//     it('should convert the input to excel file', ()=> {

//     })
// })