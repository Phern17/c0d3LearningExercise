const fs = require('fs')
const fun = {}

const readFile = (filePath) => {
    return new Promise((resolve, reject)=> {
        fs.readFile(filePath, (err, data)=> {
            if (err)
                return reject(err)

            resolve(data)
        })
    })
}

fun.readFile = readFile
module.exports = fun