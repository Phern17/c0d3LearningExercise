jest.mock('node-fetch')
jest. mock('fs')
const fetch = require('node-fetch')
const fs = require('fs')
const curriculum = require('./promiseExercise')

describe('c0d3 lessons', ()=>{
    it ('fs.writeFile should only run once', async()=>{
        fetch.mockClear()
        fs.writeFile = jest.fn()
        fetch.mockReturnValue(
            Promise.resolve({
              json: () => {
                return [{title: 'testing1'}, {title: 'testing2'}]
             }
          })
        )
        await curriculum.getLessons()
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fs.writeFile.mock.calls[0][1]).toEqual('<h1>testing1</h1><h1>testing2</h1>')
    })
})

describe('Pokemons', ()=>{
    it('should print only two pokemon names', async()=>{
        fetch.mockClear()
        fs.writeFile = jest.fn()
        fetch.mockReturnValue(
            Promise.resolve({
                json: () => {
                    return {
                        results: [{name:'testing1'}, {name:"testing2"}]
                    }
                }
            })
        )
        await curriculum.getPokemons()
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fs.writeFile.mock.calls[0][1]).toEqual('<h1>testing1</h1><h1>testing2</h1>')
    })
})

describe('Countries', ()=>{
    it ('should print the country with most cities', async()=>{
        fetch.mockClear()
        console.log = jest.fn()
        fetch.mockReturnValue(
            Promise.resolve({
                json: () => {
                    return {
                        results: [
                            {
                                name:"Narnia",
                                cities: 100
                            },
                            {
                                name: "SpaceJam",
                                cities: 48
                            },
                            {
                                name: "Pluto",
                                cities: 250
                            },
                            {
                                name: "Galaxy",
                                cities: 20
                            }
                        ]
                            
                    }
                }
            })
        )
        await curriculum.getCountries()
        expect(fetch.mock.calls.length).toEqual(1)
        expect(console.log.mock.calls[0]).toEqual('Pluto')
    })
})
