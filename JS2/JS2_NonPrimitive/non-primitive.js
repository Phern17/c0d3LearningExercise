const allFuns = {}

// replaces the value of any elements of an array when 
// element's value  matches the given number with a value of 0
// const selectiveZero = (inArray, selectedNumber, i=0) => {
//     if (i >= inArray.length)
//         return inArray

//     if (inArray[i] === selectedNumber)
//         inArray[i] = 0

//     return selectiveZero(inArray, selectedNumber, i+1)    
// }

// returns the largest number in an array
const largest = (inArray, i=0, largestNum=0) => {
    if (inArray.length === 0)
        return 

    if (i >= inArray.length)
        return largestNum

    if (i === 0)
        largestNum = inArray[i]

    if (largestNum < inArray[i])
        largestNum = inArray[i]

    return largest(inArray, i+1, largestNum)
}

// sets the value of the first X elements in an array
// to 0, where X is the input number
const firstXToZero = (inArray, firstX, i=0) => {
    if (i >= inArray.length)
        return inArray

    if (i < firstX)
        inArray[i] = 0

    return firstXToZero(inArray, firstX, i+1)
}

// helper function of allPrime, determines if a number
// is prime number
const checkPrime = (inNum, i=2) => {
    if (inNum < i)
        return false
    
    if (i === inNum)
        return true

    if (inNum % i === 0)
        return false

    return checkPrime(inNum, i+1)
}


// determines whether the value of every elements in 
// an array is a prime number
const allPrime = (inArray, i=0) => {
    if (inArray.length < 1)
        return true

    if (i >= inArray.length)
        return true
        
    if (!checkPrime(inArray[i]))
        return false

    return allPrime(inArray, i+1)
}

// Write a function named selectiveZero that takes in an array and a number.  
// This function replaces the value of any elements of an array when the 
// element's value matches the given number with a value of 0.
const selectiveZero = (arr1, num1, i=0) => {
    if (i < arr1.length) {
        if (arr1[i] === num1) 
            arr1[i] = 0

        return selectiveZero(arr1, num1, i+1)
    }

    return arr1
}

// Write a function named increasing that determines whether the elements of 
// an array are ordered such that they represent a strictly ascending sequence 
// of numbers. This means that the value of each element (other than the first) 
// is greater than the value of the previous element.
const increasing = (arr1) => {
    if (arr1.length === 0)
        return true

    return arr1.reduce((acc, curr, index)=> {
        if (arr1[index-1] >= curr)
            acc = false

        return acc
    }, true)

}

allFuns.selectiveZero = selectiveZero
allFuns.largest = largest
allFuns.firstXToZero = firstXToZero
allFuns.allPrime = allPrime
allFuns.increasing = increasing

module.exports = allFuns