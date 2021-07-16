const brain = require('brain.js')
const model = new brain.NeuralNetwork()

fs.readFile('./trainedModel.json', (data)=> {
    model.fromJSON(json)
    model.train(...) //train more data!
})