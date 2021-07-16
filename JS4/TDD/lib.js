const allFuns = {}

// const tokenize = (inStr = "") => {
//     const strArr = inStr.split(" ")
//     return strArr.reduce((acc, e) => {
//         const num = parseInt(e)
//         if (e.length > 2 && !Number.isInteger(num)){
//             acc[e.toUpperCase()] = 1
//         }
//         return acc
//     }, {})
// }
const tokenize = (inStr) => {
    if (inStr.length === 0)
        return {}

    const splitStr = inStr.split(" ")

    return splitStr.reduce((acc, e)=> {
        const num = parseInt(e)
        if (e.length > 2 && !Number.isInteger(num)) {
            acc[e.toUpperCase()] = 1
        }
        return acc
    }, {})
}

const makeTrainingData = (obj) => {
    if (Object.keys(obj).length === 0) return []

    return Object.entries(obj).reduce((acc, e)=> {
        // e[0] is the object key, e[1] is the object value
        const inputVal = tokenize(e[0])
        const outputVal = tokenize(e[1])
        acc.push({
            input: inputVal,
            output: outputVal
        })
        return acc
    }, [])
}

const pushAll = (inObj, inArr) => {
    const allKeys = Object.keys(inObj)

    allKeys.forEach((e)=> {
        inObj[e].push([...inArr])
    })

    return inObj
}

const getMostLikely = (inObj) => {
    if (Object.keys(inObj).length === 0) return null

    const allEntries = Object.entries(inObj)
    
    const result = allEntries.reduce((acc, e)=> {
        if (acc[1] < e[1])
            acc = [...e]

        return acc
    }, allEntries[0]) 

    return result[0]
}

allFuns.tokenize = tokenize
allFuns.makeTrainingData = makeTrainingData
allFuns.pushAll = pushAll
allFuns.getMostLikely = getMostLikely

module.exports = allFuns