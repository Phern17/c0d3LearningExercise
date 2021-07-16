const request = require('request')

module.exports = {
    printLessons : () => {
        request("https://c0d3.com/api/lessons", (err, res, body) => {
            const allTitles = JSON.parse(body)

            allTitles.forEach((e)=> {
                console.log(e.title)
            })
        })
    }
}

