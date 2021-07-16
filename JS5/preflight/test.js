const data = {}
setTimeout(() => {
  const newObj = data
  console.log(newObj.name)
  newObj.name = "hello"
}, 10) 
setTimeout(() => {
  const newObj = data
  console.log("2nd " + newObj.name)
  newObj.name = 300
}, 5)

console.log("1st " + data.name)