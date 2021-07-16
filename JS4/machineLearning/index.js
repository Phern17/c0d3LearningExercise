const brain = require('brain.js')
const lib = require('./lib.js') 
const fs = require('fs')

const trainingData = require('./provisionData.json')

// make the json object to be in the right format
const makeArr = lib.makeTrainingData(trainingData) 

// create new instance of Machine Learning Algorithm
const model = new brain.NeuralNetwork()
// create a model out of the algorithm
model.train(makeArr)

// create an object to hold the results
const groups = {
    MEAT: [],
    STORE: [],
    VEGGIE: []
}

// read the excel file and return the data
const data = lib.getDataFromExcel('./provision.xls')

// for each row in the excel file
data.forEach((e, i)=> {
    // if row is a header or footer, put the row into all the groups
    if (e.length < 2 || !Number.isInteger(parseInt(e[0]))) {
        return lib.pushAll(groups, e)
    }

    // else if this row if a valid item, use the model to predict which
    // group the item should be in
    // the model returns a confidence score for each group name
    let brainData = model.run(lib.tokenize(e[2]))
    // get the group name with the highest confidence score
    const val = lib.getMostLikely(brainData) 
    // if ther is no result (the computer cannot determine what the item is)
    // then put this item into all the groups
    if (!val) {
        return lib.pushAll(groups, e)
    }

    // if this key does not exist, add in this key into groups
    if( !groups[val])
        groups[val] = []

    // push the val (which is the correct item into the correct group)
    groups[val].push([...e])
})


// for every group (MAET, VEGGIE, STORE):
// create an excel file for each group using the key (name of the group)
// as the sheet name and filename
Object.entries(groups).forEach((arr)=> {
    lib.createExcel(arr[0], arr[1])
})

const modelData = model.toJSON()
fs.writeFile('./trainedModel.json', JSON.stringify(modelData), ()=> {})