const allFuns = {}

const sumAll = (arr)=> {
    if (arr.length === 0)
        return null

    return arr.reduce( (acc, e)=> {
        if (parseInt(e))
            return parseInt(acc + e)

        return acc + e
    }, "")
}

const findLargest = (arr) => {
    if (arr.length === 0)
        return null

    return arr.reduce((acc, e) => {
        if (e >= acc){
            return e
        }
        return acc 
    }, arr[0])
}

allFuns.sumAll = sumAll
allFuns.findLargest = findLargest
module.exports = allFuns