jest.mock('request')
const request = require('request')
const fs = require('fs')
const titlesDoc = require('./lessonTitles')

describe("Titles Document", ()=>{

    test('should write two titles', ()=> {
        request.mockClear()
        titlesDoc.createTitlesDoc()

        fs.writeFile = jest.fn()
        request.mock.calls[0][1]({},{}, JSON.stringify([
            {
                title: 'c0d3'
            },
            {
                title: "recursion"
            }
        ]))
        expect(fs.writeFile.mock.calls.length).toEqual(1)
        expect(fs.writeFile.mock.calls[0][1]).toEqual( "<h1>c0d3</h1><h1>recursion</h1>")
    })
})