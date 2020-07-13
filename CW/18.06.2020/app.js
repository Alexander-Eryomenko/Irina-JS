//1

// var funcs = []
// funcs.addfunc = function (func) {
//   typeof func === 'function' && this.push(func)
// }
// funcs.addfunc (function () {
//   console.log (Math.floor (Math.random()*25))
// })

// function createFunc (str) {
//     return function () {
//       console.log (str)
//     }
// }
// var func = createFunc ('abc')

// funcs.addfunc(createFunc('privet'))
// funcs[0]()
// funcs[1] ()
// func ()
// console.log (funcs)

//////////////////////////
//2 setTimeout
// setTimeout (
//   function () {
//     console.log ('Hello3')
//   }, 
//   3000
// )
// setTimeout (
//   function () {
//     console.log ('Hello2')
//   }, 
//   2000
// )
// setTimeout (
//   function () {
//     console.log ('Hello1')
//   }, 
//   1000
// )

/////////////////////////////
//3

function parent() {
  var sample = 'Privet'

  function child() {
    console.log(sample)
  }
  return child
}

var child = parent()
child()

function sum(x, y) {
  return x + y
}

console.log(sum(2, 2))

var arrowSum = (x, y) => x + y
console.log(arrowSum(6, 6))

var arrSum = (x, y) => {
  console.log(x + y)
}

arrSum(5, 10)

var sample = string => console.log(string)
var parent = message => () => console.log(message)
var sayHello = parent('Hello')
sayHello()