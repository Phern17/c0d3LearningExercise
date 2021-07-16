jest.mock("request")
const request = require("request")
const fs = require('fs')
const pokemons = require('./getImages')

describe('Pokemons', ()=> {
    test ('return 3 pokemon profiles', ()=>{
        request.mockClear()
        pokemons.createProfile()

        fs.writeFile = jest.fn()
        request.mock.calls[0][1]({}, {}, JSON.stringify({
            results: [
                {
                    name: "jollyRancher",
                    url: "testing1"
                },
                {
                    name: "johnnyBravo",
                    url: "tesing2"
                },
                {
                    name: "blueEyeDragon",
                    url: "testing3"
                }
            ]
        }))
        expect(request.mock.calls.length).toEqual(4) 
        request.mock.calls[1][1]({},{}, JSON.stringify({
            sprites: 
            {
                front_default: "testingPicture1"
            }
        }))
        request.mock.calls[2][1]({},{}, JSON.stringify({
            sprites: 
            {
                front_default: "testingPicture2"
            }
        }))
        request.mock.calls[3][1]({},{}, JSON.stringify({
            sprites: 
            {
                front_default: "testingPicture3"
            }
        }))
        expect(fs.writeFile.call.length).toEqual(1)
        expect(fs.writeFile.mock.calls[0][1]).toEqual(
            '<div><p>jollyRancher</p><img src="testingPicture1"/></div><div><p>johnnyBravo</p><img src="testingPicture2"/></div><div><p>blueEyeDragon</p><img src="testingPicture3"/></div>'
            )
    })
})