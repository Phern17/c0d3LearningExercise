const allFuns = {}

const longestString = (inObject) => {
   const valuesArr = Object.values(inObject)

   return valuesArr.reduce( (acc, e) => {
        if (e.length > acc.length)
            return e
        return acc
   }, "")
}

// finds the longest value string but returns its key.
// const keyOfLongestString = (inObject) => {
//     const longestValue = longestString(inObject)

//     const keyArray =  Object.keys(inObject)
    
//     return keyArray.reduce( (acc, e) => {
//         if (inObject[e] === longestValue)
//             return e
//         return acc
//     }, undefined)
// }

const keyOfLongestString = (inObj) => {
    const targetArr = Object.entries(inObj)

    if (targetArr.length === 0)
        return 

    const result = targetArr.reduce((acc, e)=> {
        if (acc[1].length < e[1].length) 
          acc = [...e]
        return acc
    }, ["", ""])
  
    return result[0]
  }

const removeLongestString = (inObject) => {
   
    delete(inObject[keyOfLongestString(inObject)])
}

const commas = (inObject) => {
    const valueArray = Object.values(inObject)

    return valueArray.reduce((acc, e, i)=>{
            if (i < valueArray.length - 1)
                acc += e + ", "

            else 
                acc += e

            return acc
    }, '')
}

const headers = (inObject) => {
    const keyArray = Object.keys(inObject)
    const valueArray = Object.values(inObject)

    return keyArray.reduce((acc, e, i)=> {
        return acc + "<h1>" + e + ": " + valueArray[i] + "</h1>"
    }, '')
}

allFuns.longestString = longestString
allFuns.keyOfLongestString = keyOfLongestString
allFuns.removeLongestString = removeLongestString
allFuns.commas = commas
allFuns.headers = headers
module.exports = allFuns