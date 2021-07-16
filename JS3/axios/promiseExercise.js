const fetch = require('node-fetch')
const fs = require('fs')
const axios = require('axios')


module.exports = {
    getLessons : () => {
        axios('https://c0d3.com/api/lessons').then((obj)=> {
            const titles = obj.data.reduce((acc, e)=> {
                return `${acc}<h1>${e.title}</h1>`
            }, "")
            fs.writeFile("title.html", titles, ()=> {
                console.log("Done writing to file.")
            })
        })
    },

    getPokemons : () => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then((res)=> {
            return res.json()
        }).then((data) => {
            const names = data.results.reduce( (acc, e) => {
                return `${acc}<h1>${e.name}</h1>`
            }, "")

            fs.writeFile("names.html", names, ()=>{})
        })
    },

    getCountries: () => {
        fetch('https://api.openaq.org/v1/countries')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            const highestRes = data.results.reduce( (acc, e)=> {
                if (!acc.name || e.cities > acc.cities)
                    return {name: e.name, cities: e.cities}

                return acc
            }, {})

            console.log(highestRes.name)
        })
    }
}

