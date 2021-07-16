const allFuns = {}

const removeCharX = (userString, selectedPos, resString='', i=0) => {
    if (selectedPos < 0)
        return userString

    if (i >= userString.length){
        return resString
    }

    if (i != selectedPos && selectedPos >= 0)
    {
        resString += userString[i]
    }

    return removeCharX(userString, selectedPos, resString, i+1)
}
/*
const less3Diff = (inString1, inString2, i = 0, diffCounter = 0) => {
    
    // compare the length of two strings
    // return false if they are not in same 
    // length
    if (inString1.length != inString2.length)
        return false

    // return true if both String length is less 
    // than 3
    if (inString1.length < 3 && inString2.length < 3)
        return true
    
    // terminate the function once diffCounter is
    // greater than 3
    if (diffCounter > 3)
        return false

    // if entire strings is processed
    if (i >= inString1.length)
    {
        // return true if diffcounter smaller than 3
        if (diffCounter < 3)
            return true
        // otherwise false    
        else 
            return false   
    }

    if (inString1[i] != inString2[i])
        diffCounter += 1

    return less3Diff(inString1, inString2, i+1, diffCounter)
    
}
*/

// const less3Diff = (inString1, inString2, i=0, diff=0) => {
//     //case 1 when differences in string length > 2 or difference in char > 2
//     if (inString1.length - inString2.length > 2 || inString2.length - inString1.length > 2 || diff > 2)
//         return false

//     if (i == inString1.length)
//         return true    

//     if (inString1.charAt(i) != inString2.charAt(i))
//         diff += 1

//     return less3Diff(inString1, inString2, i+1, diff)    
// }

const less3Diff = (tarStr1, tarStr2, i=0, counter=0) => {
    if (i < tarStr1.length){
        if (tarStr1[i] !== tarStr2[i]){
            counter += 1
            if (counter >= 3)
                return false
        }
        return less3Diff(tarStr1, tarStr2, i+1, counter)
    }
    
    return true
}

const reverso = (inString1, resString='', i=inString1.length - 1) => {
    if (inString1.length == 0 || inString1.length == 1)
        return inString1
    
    resString += inString1[i]

    if (i <= 0)
        return resString

    return reverso(inString1, resString, i-1)
}

const delayAndCall = (num1, func1) => {
    return () => {
        setTimeout(func1, num1)
    }
}


// const isPrime = (num, start=2) => {
//     if (num < start)
//         return false

//     if (start === num)
//         return true

//     if (num % start === 0)
//         return false

//     return isPrime(num, start + 1)
// } 

// const getNextPrime = (start) => {
//     if (isPrime(start)){
//         return start
//     }

//     return getNextPrime(start + 1)

// }

// const primeMachine = (start) => {
//     if (start < 2)
//         start = 1

//     if (isPrime(start))
//         start = start + 1

//     return () => {
//         const result = getNextPrime(start)
//         start = result + 1
//         return result
//     }
// }
const isPrime = (start, i=2) => {
    if (start <= 1)
        return false
    
    if (i < start) {
        if (start % i === 0)
            return false
            
        return isPrime(start, i+1)
    }

    return true
}

// iterate to another number if it's not prime, return the prime number
const nextNumber = (start) => {
    if (start < 1)
        start = 1


    if (isPrime(start))
        return start

    return nextNumber(start+1)
}

const primeMachine = (start) => {
    return () => {
        start += 1
        const result = nextNumber(start)w
        start = result
        return result
    }
}

allFuns.removeCharX = removeCharX // You need this line for every function you write
allFuns.less3Diff = less3Diff
allFuns.reverso = reverso 
allFuns.delayAndCall = delayAndCall

allFuns.primeMachine = primeMachine

module.exports = allFuns