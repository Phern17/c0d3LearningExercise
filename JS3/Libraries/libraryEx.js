const allFuns = {}
const fs = require('fs')

fs.readdir('./', (err, files)=>{
    files.forEach((fileName)=>{
        if (fileName.length < 10)
            console.log(fileName)
    })
})

const makeFiles = (userInputX, i=0) => {
   if (i === userInputX + 1) return

    fs.writeFile(`./tainer${i}.txt`, `Gotta catch 'em all`, ()=> {})

    return makeFiles(userInputX, i+1)
}


const listAllFiles = () => {
    
    fs.readdir('./', (err,files)=>{
        const resString = files.reduce( (acc, e)=> {
            return  `${acc}<h1>${e}</h1>`
        }, "")   
        
        fs.writeFile('./listFile.html', resString, ()=>{
            console.log(resString)
        })
    })

    
}

listAllFiles()

allFuns.makeFiles = makeFiles
module.exports = allFuns