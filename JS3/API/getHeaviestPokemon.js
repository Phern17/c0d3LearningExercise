const request = require('request')

module.exports = {
    heaviestPokemon : () => {
        request("https://pokeapi.co/api/v2/pokemon/", (err, res, body) => {
            const parsedJSON = JSON.parse(body)
            const detailsList = []

            parsedJSON.results.forEach( (e) => {
                request(e.url, (errIn, resIn, pokemonJSON) => {
                    const pokemonDetails = JSON.parse(pokemonJSON)

                    detailsList.push({name: e.name, weight: pokemonDetails.weight})

                    if (detailsList.length === parsedJSON.results.length)
                    {
                        const heaviestPoke = detailsList.reduce( (acc, pokemon) => {
                            if (pokemon.weight > acc.weight)
                                return pokemon

                            return acc
                        }, detailsList[0])
                        
                        console.log(`Heaviest Pokemon is ${heaviestPoke.name} at ${heaviestPoke.weight} pounds`)
                    }
                })
            })
        })
    }
}