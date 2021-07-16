const barks = [[1,2,3], [2,3,4], [3,4,5]]
barks[2][1] = 10 // what is barks?
barks[1][0] = barks[2][1] // what is barks?

barks[2] = () => {
  barks[0][1] = barks[0][1] + barks[0][0]
}
           // what is barks?
barks[2]() // what is barks[2]()?
barks[1] = barks[2]()
// In the end, what is barks?
console.log(barks)

// fyi, barks is a 2-dimensional array