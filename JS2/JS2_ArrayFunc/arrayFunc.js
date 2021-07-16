const allFuns = {}

// const copyArray = (inArray, i=0, outArray=[]) => {
//     if (i >= inArray.length)
//         return outArray

//     if (inArray.length === 0)
//         return inArray

//     outArray.push(inArray[i])

//     return copyArray(inArray, i+1, outArray)
// }

const copyArray = (inArr, i=0, outArr=[]) => {
    if (i >= inArr.length)
        return outArr

    outArr.push(inArr[i])

    return copyArray(inArr, i+1, outArr)
}

// const removeElement = (inArray, inString, i=0) => {
//     if (inArray.length === 0)
//         return inArray

//     if (i >= inArray.length)
//         return inArray

//     if (inArray[i] === inString){
//         inArray.splice(i, 1)
//         return removeElement(inArray, inString, i)
//     }
    
//     return removeElement(inArray, inString, i+1)
// }

const removeElement = (inArr, inStr, i=0) => {
    if (i >= inArr.length)
        return inArr

    if (inArr[i] === inStr){
        inArr.splice(i, 1)
        return removeElement(inArr, inStr, i)
    } 
        
        

    return removeElement(inArr, inStr, i+1)
}

const copyWithout = (inArray, inNum, outArray=[], i=0) => {
    if (i === inArray.length)
        return outArray
    
    if (inArray.length <= 0)
        return inArray

    if (inArray[i] != inNum)
        outArray.push(inArray[i])

    return copyWithout(inArray, inNum, outArray, i+1)    
}

// this method is to get the length of inArray - 1, and decrese 
// i every time we call, we could also use `unshift` to do this
const copyReverse = (inArray, outArray=[], i=inArray.length-1) => {
    if (inArray.length <= 0)
        return inArray

    outArray.push(inArray[i])

    if (i === 0)
        return outArray

    return copyReverse(inArray, outArray, i-1)
}

const copyLast = (inArray, firstXelement, outArray=[], i=0) => {
    if (i === inArray.length)
        return outArray

    if (i < firstXelement)
        return copyLast(inArray, firstXelement, outArray, i+1)

    outArray.push(inArray[i])

    return copyLast(inArray, firstXelement, outArray, i+1)
}

const copyFirst = (inArray, firstXelement, outArray=[], i=0) => {
    if (i >= inArray.length - firstXelement)
        return outArray

    if (inArray.length === 0)
        return inArray

    outArray.push(inArray[i])

    return copyFirst(inArray, firstXelement, outArray, i+1)

}

//runs a func on every element inside inArray
const runOnEach = (inArray, func, outArray=[], i=0) => {
    if (inArray.length === 0)
        return inArray

    if (i >= inArray.length)
        return outArray

    outArray.push(func(inArray[i], i))

    return runOnEach(inArray, func, outArray, i+1)

}

// const onlyIndex = (inArray, index, outArray=[], i=0, j=0) => {
//     if (inArray.length === 0)
//         return inArray

//     if (i >= inArray.length)
//         return outArray

//     if (j >= inArray[i].length)
//         return onlyIndex(inArray, index, outArray, i+1, j=0)

//     if (j === index)
//         outArray.push(inArray[i][j])

//     return onlyIndex(inArray, index, outArray, i, j+1)
// }

const onlyIndex = (inArr, index, outArr=[], i=0) => {
    if (i >= inArr.length)
        return outArr

    outArr.push(inArr[i][index])

    return onlyIndex(inArr, index, outArr, i+1)
}

allFuns.copyArray = copyArray 
allFuns.removeElement = removeElement
allFuns.copyWithout = copyWithout
allFuns.copyReverse = copyReverse
allFuns.copyLast = copyLast
allFuns.copyFirst = copyFirst
allFuns.runOnEach = runOnEach
allFuns.onlyIndex = onlyIndex
module.exports = allFuns