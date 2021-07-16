const allFuns = {}

const addKV = (inObject, key, value) => {
    inObject[key] = value
}

const filterNonKeys = (inArray, inObject) => {
  return inArray.filter((e)=> {
        if (inObject.e != null)
            return e
  })
}

const addDescriptions = (inArray, inObject) => {
  return inArray.forEach((e)=> {
      e.description = inObject[e.name]
  })
}

// const countOccurrences = (inArray) => {
//    const outObj = {}

//    inArray.forEach((e) => {
//        outObj[e] = outObj[e] + 1 || 1
//    })

//    return outObj
// }  

// Write a function called countOccurrences that returns an object that counts how many times each item occurs in an array.
const countOccurrences = (inArr) => {
  return inArr.reduce((acc, e)=> {
    acc[e] = (acc[e] || 0) + 1
    return acc
  }, {})
}

const keyOfLongestString = (inObj) => {
  const result = Object.entries(inObj).reduce((acc, e)=> {
      if (acc[1] < e[1].length) 
        acc = [...e]
      return acc
  }, ["", 0])

  return result[0]
}


allFuns.addKV = addKV
allFuns.filterNonKeys = filterNonKeys
allFuns.addDescriptions = addDescriptions
allFuns.countOccurrences = countOccurrences
module.exports = allFuns