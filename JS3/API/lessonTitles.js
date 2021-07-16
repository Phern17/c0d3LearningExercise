// const request = require('request')
// const fs = require('fs')

// request("https://www.c0d3.com/api/lessons", (err, res, body) => { console.log(body) })

// module.exports = {
//     createTitlesDoc: () => {
//         request("https://www.c0d3.com/api/lessons", (err, res, body) => {
//             const parsedTitles = JSON.parse(body)

//             const targetString = parsedTitles.reduce( (acc,e) => {
//                 return `${acc}<h1>${e.title}</h1>`
//             }, "")

//             fs.writeFile("./lessons.html", targetString, ()=>{
//                 console.log("done.")
//             })
//         })
//     }
// }

const request = require('request')
const fs = require('fs')

module.exports = {
    createTitlesDoc: ()=> {
        request("https://www.c0d3.com/api/lessons", (err, response, body)=> {
            const jsonData = JSON.parse(body)

            const targetStr = jsonData.reduce((acc, e)=> {
                return `${acc}<h1>${e.title}</h1>`
            }, "")

            fs.writeFile('./lesson.html', targetStr, ()=> {
                console.log("Done writing")
            })
        })
    }
}