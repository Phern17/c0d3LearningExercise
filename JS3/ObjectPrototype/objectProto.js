Object.prototype.forEach = function(inFun, i=0, key=Object.keys(this)){
    if (i >= key.length)
        return 
    inFun(key[i], this[key[i]], i, this)
    return this.forEach(inFun, i+1, key)
}

Object.prototype.filter = function(inFunc, i=0, keys=Object.keys(this), outObj={}) {
    if (i >= keys.length)
        return outObj

    if(inFunc(keys[i], this[keys[i]], this))
        outObj[keys[i]] = this[keys[i]]

    return this.filter(inFunc, i+1, keys, outObj)
}

Object.prototype.reduce = function(inFunc, accString, props=Object.entries(this)){
    return props.reduce((acc, e, i) => {
        return inFunc(acc, e[0], e[1], i)
    }, accString)
}

Array.prototype.getCharCount = function() {
    const countChar = ( outObj, str, i=0) => {
        if (i == str.length) return outObj

        const letter = str[i]

        outObj[letter] = outObj[letter] || 0
        outObj[letter] += 1

        return countChar(outObj, str, i+1)
    }

    return this.reduce( (acc, e) => {
        return countChar(acc, e)
    }, {})
}

// Array.prototype.getMostCommon = function(){
//    const frequencyObj = this.reduce( (acc, e) => {
//         acc[e] = acc[e] || 0
//         acc[e] += 1
//         return acc
//    }, {})

//    const highestFreq = Object.entries(frequencyObj).reduce( (acc, e) => {
//         if (e[1] > acc[1]){
//             if (parseInt(e[0])){
//                 return [parseInt(e[0]), e[1]]
//             }
//             return e
//         }
//         return acc
//    }, [null, 0])
  
//    return highestFreq[0]
// }

Array.prototype.getMostCommon = function() {
    const result = this.reduce((acc, e) => {
        // first we figure out the current occurence of this element inside the object and + 1
        acc[0][e] = (acc[0][e] || 0) + 1  
        
        // then we compare it against our currently highest holder,
        // if it's greater than current highest
        // current highest will be replaced which is acc[2]
        // acc[1] will be the element inside the array that has
        // the element that holds the highest occurence so far
        if (acc[0][e] > acc[2]){
            acc[2] = acc[0][e]
            acc[1] = e
        }

        return acc

    }, [{}, null, 0])

    return result[1]
}

// Array.prototype.removeDupes = function(){
//     // count frequencies of each element in the array
//     const Elementfx = this.reduce((acc, e)=>{
//         acc[e] = acc[e] || 0
//         acc[e] += 1
//         return acc
//     }, {})

//     const remove = (i=0) => {
//         if (i === this.length) 
//             return 

//         if (Elementfx[this[i]] === 1)
//             return remove(i + 1)

//         this.splice(i, 1)
//         return remove(i)
//     }

//     remove()
// }

Array.prototype.removeDupes = function() {
    if (this.length === 0)
        return this

    const elementOccurence = this.reduce((acc, e)=> {
        acc[e] = (acc[e] || 0) + 1
        return acc
    } , {})

    const remove = (i=0) => {
        if (i >= this.length)
            return

        if (elementOccurence[this[i]] === 1)
            return remove(i + 1)

        this.splice(i, 1)
        return remove(i)
    }

    remove()
}