const allFuns = {}
const request = require('request')

const getMostCities = () => {
    request('https://api.openaq.org/v1/countries', (err, res, body) => {
        const parsedJson = JSON.parse(body)

        const highestCity = parsedJson.results.reduce( (acc, e) => {
            const count = acc[1]

            if (e.cities > count){
                return [e.name, e.cities]
            }
            return acc
        }, [null, 0])

        console.log(highestCity[0])
    })
}

allFuns.getMostCities = getMostCities
module.exports = allFuns