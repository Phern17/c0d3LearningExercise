const allFuns = {}

// const oddToZero = (inArray) => {
//     return inArray.map((i) => {
//         if (i % 2)
//             return 0

//         return i
//     })
// }

const oddToZero = (inArr) => {
    return inArr.map((element)=> {
        if (element % 2)
            return 0

        return element
    })
}

const firstLetters = (inArray) => {
    return inArray.map((i) => {
        return i[0]
    })
}

const firstXToZero = (inArray, inNum) => {
    return inArray.map((i, e)=> {
        if (e < inNum)
            return 0

        return i
    })
}

const isPrime = (inNum, i=2) => {
    if (inNum < i) return false
    if (i === inNum) return true
    if (inNum % i === 0)  return false

    return isPrime(inNum, i+1)
}

const nonPrimeToZero = (inArray) => {
    return inArray.map((currElement)=> {
        if (!isPrime(currElement))
            return 0

        return currElement
    })
}

const append = (inArray, addString) => {
    return inArray.map((currElement)=> {
        return currElement + addString
    })
}

const runOnEach = (inArray, func) => {
    return inArray.map(func)
}

const clone = (inArray) => {
    return inArray.map((e) => {
        return e
    })
}

allFuns.oddToZero = oddToZero
allFuns.firstLetters = firstLetters
allFuns.firstXToZero = firstXToZero
allFuns.nonPrimeToZero = nonPrimeToZero
allFuns.append = append
allFuns.runOnEach = runOnEach
allFuns.clone = clone
module.exports = allFuns