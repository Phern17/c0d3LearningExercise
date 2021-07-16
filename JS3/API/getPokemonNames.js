const request = require('request')
const fs = require('fs')
const allFuns = {}

const getNames = () => {
    request("https://pokeapi.co/api/v2/pokemon/", (err, res, body)=>{
        const parsedJson = JSON.parse(body)
        const htmlString = parsedJson.results.reduce((acc, e)=>{
            return `${acc}<h1>${e.name}</h1>`
        }, "")

        fs.writeFile('names.html', htmlString, ()=>{
            console.log('Done')
        })
    })
}

allFuns.getNames = getNames
module.exports = allFuns