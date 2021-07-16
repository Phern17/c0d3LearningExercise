Array.prototype.getNext = function(){
    const currIndex = this.currElement || 0
    this.currElement = (currIndex + 1) % this.length
    return this[currIndex]
}

Array.prototype.setMaxSize = function (maxNum) {
    this.oldPush = this.push

    this.push = (newElement) => {
        if (this.length < maxNum)
            return this.oldPush(newElement)

        return this.length
    }
}

Array.prototype.tiredForEach = function (callback, restTime) {
    if (this.isTired)
        return console.log(`Too tired, Please wait ${restTime}ms.`)

    this.isTired = true
    this.waitTime = restTime 

    setTimeout(()=>{
        this.isTired = false 
    }, restTime)

    return this.forEach(callback)
}