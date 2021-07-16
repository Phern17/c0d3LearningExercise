// const hello3x = () => {
//     let counter = 0;

//     return () => {
//         counter += 1;
//         if (counter <= 3) 
//             return "hello"
        
//         return ""
//     }
// }

// const b = hello3x()
// console.log(b()) // returns 'hello'
// console.log(b())// returns 'hello'
// console.log(b()) // returns 'hello'
// console.log(b()) // returns ''

// const helloFunction = () => {
//     let result = ''
//     return () => {
//         result += "hello" 
//         return result
//     }
// }

// const moreHello = helloFunction()
// let b = moreHello() // b is "hello"
// console.log(b)
// b = moreHello() // b is "hellohello"
// console.log(b)
// b = moreHello() // b is "hellohellohello"
// console.log(b)
// b = moreHello() // b is "hellohellohellohello"
// console.log(b)

// const lessThan = (targetAge) => {
//     return (age)=> {
//         return age < targetAge
//     }
// }

// const youngerThanCardiB = lessThan(27)
// let miley = youngerThanCardiB(26) // true, because 26 is smaller than 27
// console.log(miley)
// let nicki = youngerThanCardiB(36) // false, because 36 is not smaller than 27
// console.log(nicki)

// const callWith = (targetTime) => {
//     return (userFun) => {
//         return userFun(targetTime)
//     }
// }

// const fun = callWith(10)
// let b = fun((num) => {
//   return num + 5
// }) // b is 15

// b = fun((num) => {
//   return num + "hello"
// }) // b is "10hello"
// console.log(b)

// b = fun((num) => {
//   return 500 % num
// }) // b is 0
// console.log(b)

// const runIt = (userFun) => {
//     return (para1, para2) => {
//         return userFun(para1, para2)
//     }
// }

// const fizzbuzz = (num, i=1) => {
//     if (i > num) {
//         return 
//     }

//     if (i % 3 === 0 && i % 5 === 0){
//         console.log('fizzbuzz')
//     } else if (i % 3 === 0) {
//         console.log('fizz')
//     } else if (i % 5 === 0) {
//         console.log('buzz')
//     } else {
//         console.log(i)

//     }

//     return fizzbuzz(num, i+=1)
// }

// fizzbuzz(16)

// const numberedHello = (num, i=1, result="") => {
//     if (i > num) {
//         return result
//     }

//     result += "hello"

//     return numberedHello(num, i+=1, result)
// }

// console.log(numberedHello(5)) // "hellohellohellohellohello"
// console.log(numberedHello(0)) // ""
// console.log(numberedHello(-4) )// ""

// const sumEvens = (num, i=2, result=0) => {
//     if (i > num) {
//         return result;
//     }

//     if (i % 2 === 0) 
//         result += i;

//     return sumEvens(num, i+1, result)
// }

// let result = sumEvens(5) // result is 6 because 4 + 2
// console.log(result)
// result = sumEvens(1) // result is 0
// console.log(result)

// const tryNumRange = (num, func, i=1, result=false) => {
//     if (i > num) {
//         return false
//     }

//     result = func(i)
//     if (result)
//         return true

//     return tryNumRange(num, func, i+=1, result)
// }

// let res = tryNumRange(15, (e) => {
//     return e > 10 
//   }) // res is true, because the input function returns 
//   // true when it is called with 11

//   console.log(res)
  
//   res = tryNumRange(8, (e) => {
//     return e === 19
//   }) // res is false, because passing 1-8 into 
//   // the input function will never return true

//   console.log(res)

// const a = fun1(2, ()=> {
//     console.log('hello')
// })

// const logNonMatching = (tarStr, tarChar, i=0) => {
//     if (i >= tarStr.length)
//         return

//     if (tarStr[i] !== tarChar)
//         console.log(tarStr[i])

//     return logNonMatching(tarStr, tarChar, i+1)
// }

// logNonMatching("banana", "a")

// const wait20 = () => {
//     setTimeout(() => {
//         console.log("hello")
//     }, 1000 * 20)
// }

// wait20()

const solution = (tarStr, i=0) => {
    if (i >= tarStr.length)
        return

    setTimeout(() => {
        console.log(tarStr[i])
        return solution(tarStr, i+1)
    }, 1000)
}

solution("bitches")