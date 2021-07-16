const fetch = require('node-fetch')

const allData = []
const resultOfDataPromise = fetch('https://a.com').then( (r) => {
	// json is a function that turns the response string into a JavaScript data type
  return r.json() 
}).then( (aData) => {
  allData.push(aData)
  return fetch('https://b.com')
}).then( (bData) => {
  allData.push(bDat)
  return fetch('https://c.com')
}).then( (cData) => {
  allData.push(cData)
  return fetch('https://d.com')
}).then( (dData) => {
    allData.push(dData)
})