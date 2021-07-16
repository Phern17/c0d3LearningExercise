const rf = require('./readfile')

const readFiles = (filePathsArr) => {
    const dataSet = filePathsArr.map((e)=> {
        return rf.readFile(e)
    })

    return Promise.all(dataSet)
}