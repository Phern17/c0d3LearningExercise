const myObj = require('./myObj')
const myFun = require('./myFun')

const result = () => {
    const array = Object.entries(myObj)
    const bros = array.reduce((acc, e)=>{
        
        let runTimes = e[1]

        const callIt = (i=0) =>{
            if (i === runTimes)
                return

            const resofMyFun = myFun()
            console.log(resofMyFun)
            return callIt(i+1)
        }   

        callIt()

    }, 0)

}

result()