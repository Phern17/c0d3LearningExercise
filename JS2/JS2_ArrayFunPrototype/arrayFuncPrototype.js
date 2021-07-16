const allFuns = {}

// Array.prototype.getEvens = function (i=0, outArray=[]) {
//     if (i === this.length)
//         return outArray
    
//     if (this[i] % 2 === 0)
//         outArray.push(this[i])
 
//     return this.getEvens(i+1, outArray)
// }

Array.prototype.sum = function () {
    if (this.length === 0)
        return

    let startVal = ''
    if (typeof(this[0]) === 'number')
        startVal = 0

    return this.reduce((initVal, currVal)=> {
        return initVal + currVal
    }, startVal)
}

Array.prototype.pad = function (times, leString, i=0) {
    if (i >= times)
        return this

    this.push(leString)

    return this.pad(times, leString, i+1)
}

Array.prototype.fizzbuzz = function (i = 0) {
    if (i >= this.length)
        return this 

    if (this[i] % 3 === 0 && this[i] % 5 === 0)
        this[i] = 'fizzbuzz'
        
    if (this[i] % 3 === 0)
        this[i] = "fizz"

    if (this[i] % 5 === 0)
        this[i] = 'buzz'

    return this.fizzbuzz(i+1)
}

Array.prototype.removeEvens = function (i= 0) {
    if (i >= this.length)
        return this

    if (this[i] % 2 === 0) {
        this.splice(i,1)
        return this.removeEvens(i)
    }

    return this.removeEvens(i+1)
}

Array.prototype.getIterator = function () {
    let i = -1
    return () => {
        i = i + 1
        return this[i % this.length]
    }
}

Array.prototype.getEvens = function() {
    return this.filter((e) => {
        return e % 2 === 0
    })
}

allFuns.getEvens = this.getEvens
allFuns.sum = this.sum
allFuns.pad = this.pad
allFuns.fizzbuzz = this.fizzbuzz
allFuns.removeEvens = this.removeEvens
allFuns.getIterator = this.getIterator
module.exports = allFuns