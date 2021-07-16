jest.mock("request")
const request = require('request')
const getCountry = require('./openaq')

describe('Countries', ()=> {
    test ('find the country with most cities', ()=>{
        request.mockClear()
        getCountry.getMostCities()

        console.log = jest.fn()
        request.mock.calls[0][1]({},{}, JSON.stringify({
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
        }))
        expect(console.log.mock.calls[0][0]).toEqual("Pluto")
    })
})