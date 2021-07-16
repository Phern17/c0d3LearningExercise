const allFuns = {}

const sum = (inArray) => {
    return inArray.reduce((e, currValue) => {
        return e + currValue 
    }, 0)
}

const largest = (inArray) => {
    return inArray.reduce((e, currValue) => {
        if (currValue > e)
            return currValue

        return e
    }, 0)
}

const longest = (inArray) => {
    return inArray.reduce((initVal, currVal)=> {
        if (currVal.length > initVal.length)
            return currVal

        return initVal
    }, inArray[0])
}

const matches = (inArray, tarString) => {
    return inArray.reduce((initVal, currVal)=> {
        if (currVal === tarString)
           return initVal + 1
           
        return initVal
    }, 0)
}

const combineLess5 = (inArray) => {
    return inArray.reduce((initVal, currVal)=> {
        if (currVal.length < 5)
            return initVal + currVal
            
        return initVal
    }, "")
}

const largerThan5 = (inArray) => {
    return inArray.reduce((initVal, currVal)=> {
        if (currVal > 5)
            initVal.push(currVal)
        
        return initVal    
    }, [])
} 

allFuns.sum = sum
allFuns.largest = largest
allFuns.longest = longest
allFuns.matches = matches
allFuns.combineLess5 = combineLess5
allFuns.largerThan5 = largerThan5
module.exports = allFuns