jest.mock("request")
const request = require('request')
const heaviest = require('./getHeaviestPokemon')

describe('Pokemons', ()=>{
    test ('console.log the heaviest pokemon', ()=>{
        request.mockClear()
        heaviest.heaviestPokemon()

        console.log = jest.fn()
        request.mock.calls[0][1]({}, {}, JSON.stringify({
            results: [
                { 
                    name: "Rocky",
                    url:"testing1"
                },
                {
                    name: "Zoolander",
                    url: "testing2"
                },
                {
                    name: "Naruto",
                    url: "testing"
                }
            ]
        }))
        expect(request.mock.calls.length).toEqual(4)
        request.mock.calls[1][1]({},{}, JSON.stringify({weight: 200}))
        request.mock.calls[2][1]({},{}, JSON.stringify({weight: 300}))
        request.mock.calls[3][1]({},{}, JSON.stringify({weight: 100}))
        expect(console.log.mock.calls[0][0]).toEqual('Heaviest Pokemon is Zoolander at 300 pounds')
    })
})
