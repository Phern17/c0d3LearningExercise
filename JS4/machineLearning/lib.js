const xlsx = require('xlsx')

const allFun = {}

// Given an object (keys are item names and values are group names),
// return an array of objects. Each object has an 'input' key and an
// 'output' key, and their values are the tokenized key and value
// from the input object, respectively
const makeTrainingData = (inputJsonObj) => {
    return Object.entries(inputJsonObj).map( (e) => {
        return {input: tokenize(e[0]), output: tokenize(e[1])}
    })
}

// takes in a string argument (file path) and returns an array of objects
// that represent each row in the file. Assume the sheet is called PROV
// and has a header at row.
const getDataFromExcel = (infilePath) => {
    const provision = xlsx.readFile(infilePath)
    return xlsx.utils.sheet_to_json(provision.Sheets.PROV, {header: 1})
}

// takes in two arguments, a string that represents the filename and an 
// array of objects that represents each row of the Excel sheet. Your
// function should create a sheet and a book with the name parameter, 
// attach the sheet to the book with the name parameter as its title, and
// write the book into a file using name parameter plus .xlsx as the filename
const createExcel = (fileName, inArr) => {
    // creates a new excel workbook. A workbook can have many sheets.
    const book = xlsx.utils.book_new()

    //creates an excel worksheet. Takes in two arguments: 1st an array of
    // objects for each row in the sheet and 2nd an object with information about the sheet.
    const bookSheet = xlsx.utils.json_to_sheet(inArr, {sheet: fileName})

    // this function will attach the sheet created above to the book created above. 
    // then it will give the book a title
    xlsx.utils.book_append_sheet(book, bookSheet, fileName)

    // writes an excel workbook to a file. Takes in two arguments, an excel workbook object 
    // and a file path to write the data to.
    xlsx.writeFile(book, `./${fileName}.xlsx`)
}

// Given a string, split it into words and return an object where each word
// is a key (capitalized) with value 1. Ignore strings shorter than 3 
// characters and numbers.
const tokenize = (inStr) => {
    const strArr = inStr.toUpperCase().split(" ")
    return strArr.reduce((acc, e)=> {
        if (e.length < 3 || parseInt(e))
            return acc

        acc[e] = (acc[e] || 0) + 1
        return acc
    }, {})
}

// finds the key with the largest value in an oject.
const getMostLikely = (inObj) => {
    const keysArr = Object.keys(inObj) // contains all key value of the object, a string array

    if (keysArr.length === 0)
        return null

    const result = keysArr.reduce((acc, e)=> {

        // if this element inside input object is greater,
        // re-assign the new value to accumulator
        if (inObj[e] > acc[1]){ 
            acc[0] = e
            acc[1] = inObj[e]
        }

        return acc
             
    }, [keysArr[0], inObj[keysArr[0]]]) // set the first element inside obj as the default value

    return result[0]
}

// pushes an array onto every array in an object
const pushAll = (inObject, inArr) => {
    const keysArr = Object.keys(inObject)

    if (!keysArr)
        return

    keysArr.forEach((e)=> {
        inObject[e].push(inArr)
    })
}

allFun.makeTrainingData = makeTrainingData
allFun.tokenize = tokenize
allFun.pushAll = pushAll
allFun.getMostLikely = getMostLikely
allFun.getDataFromExcel = getDataFromExcel
allFun.createExcel = createExcel

module.exports = allFun