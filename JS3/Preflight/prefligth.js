const allFunc = {}

const insertZero = (num, i=0, outArr=[]) => {
    if (i >= num)
        return outArr

    outArr.push(0)
    return insertZero(num, i+1, outArr)
}

const zeroSquare = (num, i=0, outArr=[]) => {
    if (i >= num)
        return outArr

    outArr.push(insertZero(num))
    return zeroSquare(num, i+1, outArr)
}

allFunc.zeroSquare = zeroSquare

module.exports = {
    mergeArray: (arr1, arr2)=> {
        return [...arr1, ...arr2]
    },

    firstLongerThan: (arr1, in1) => {
        return arr1.find((e)=> {
            return e.length > in1
        })
    },

    getReturnValues: (arr1) => {
       const endRes = []
       
       arr1.forEach((e)=>{
            endRes.push(e())
       })

       return endRes
    },

    // zeroSquare: (num) => {
    //     const endRes = []

        

    //     for (i=0; i < num; i++)
    //     {
    //         endRes.push([])
    //         for (j = 0; j < num; j++)
    //         {
    //             endRes[i].push(0)
    //         }
    //     }

    //     return endRes
    
    // }

    zeroSquare: allFunc.zeroSquare

    
}