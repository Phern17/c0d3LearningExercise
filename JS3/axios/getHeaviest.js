const fetch = require('node-fetch')


const pokeNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const arrayPromises = pokeNumbers.map( (num) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${num}`).then((result) => {
    // result is an array of response objects, one for each request
    // we need to parse the JSON in each result
    return result.json()
    })
  })
  
Promise.all(arrayPromises).then((results) => {
  // results is now an array of objects
  // we can do something with it, like
  const heavyPoke = results.reduce((acc, e) => {
    console.log(`Pokemon Name: ${e.name} Pokemon Weight: ${e.weight}`)
    if (acc[1] < e.weight){
      acc[0] = e.name
      acc[1] = e.weight
    }
    
    return acc
  }, [undefined, 0])

  console.log(heavyPoke[0])
})