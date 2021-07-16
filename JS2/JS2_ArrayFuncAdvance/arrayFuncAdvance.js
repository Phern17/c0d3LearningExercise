const allFuns = {}

const noMoreEvens = (inArray) => {
    return inArray.filter((e)=> {
        if (e % 2)
            return e
    })
}

const removeEmpty = (inArray) => {
    return inArray.filter((e)=> {
        if (e.length > 0)
            return e
    })
}

const isPrime = (inNum, i=2) => {
    if (inNum < i) return false
    if (i === inNum) return true
    if (inNum % i === 0) return false

    return isPrime(inNum, i+1)
}

const primesOnly = (inArray) => {
    return inArray.filter((e) => {
        if (isPrime(e))
            return e
    })
}

const firstPrime = (inArray) => {
    return inArray.find((e)=> {
        if (isPrime(e))
            return e
    })
}

allFuns.noMoreEvens = noMoreEvens
allFuns.removeEmpty = removeEmpty
allFuns.primesOnly = primesOnly
allFuns.firstPrime = firstPrime
module.exports = allFuns