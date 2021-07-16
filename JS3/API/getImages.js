const request = require('request');
const fs = require('fs');

request('https://pokeapi.co/api/v2/pokemon?limit=100', (err, res, body) => {
  const parsedJson = JSON.parse(body);
  const pokemonList = [];
  parsedJson.results.forEach((thisPokemon) => {
    const pokemonName = thisPokemon.name
    request(thisPokemon.url, (err, pokeRes, pokeBody) => {
      const data = JSON.parse(pokeBody)
      pokemonList.push({
        name: pokemonName,
        pic: data.sprites.front_default
      })
      if (pokemonList.length === parsedJson.results.length) {
        const htmlStr = pokemonList.reduce((acc, f) => {
          return `${acc}<div><p>${f.name}</p><img src="${f.pic}"/></div>`;
        }, '');
        fs.writeFile('namesandimages.html', htmlStr, ()=>{``});
      }
    })
  });
});