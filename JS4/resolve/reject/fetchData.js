const fetch = require('node-fetch');

const fetchData = (url) => {
    return fetch(url).then((response)=> {
        return response.json()
    })
}