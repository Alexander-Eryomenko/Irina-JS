// (function () {
// console.log ('Hello!')
// })

// var func = (function(arg) {
//   return function() {
//     return arg++
//   }
// })(0)
// func ()

// console.log (func)

// var func = (arg => () => arg++)(0)

// function recurs (arg) {
//   arg-- > 0 && recurs(arg) 
//   console.log (arg)
// }

// var circle = function ( radius ) {
//   var elem = document.createElement ( "div" )
//   setTimeout (() => document.body.appendChild (elem), 1000)
//   elem.style = `
//        position: absolute;
//        width: ${radius}px;
//        height: ${radius}px;
//        border-radius: 50%;
//        border: solid 1px green;
//   `
//   if ( radius > 40 ) circle (radius -= 20)
// }

// for (var i = 0; i < 10; i++){
//     setTimeout(() => console.log (i), 1000)
// }

// for (var i = 0; i < 10; i++){
//   setTimeout(() => console.log (i), 1000 * i)
// }

// for (var i = 0; i < 10; i++){
//   setTimeout(((arg) => () => console.log (arg))(i), 1000 * i) 
// }

// var funcs = []
// for (let x of [0,1,2,3,4,5]){
//     funcs.push(() => console.log (x))
// }
// funcs[2]()

// const func = () => console.log ('Vasya')
// func.sayGoodbye = () => console.log ('Goodbye')
// func.sayGoodbye()


// let delta = 1
// var circle = function ( radius ) {
//   const elem = document.createElement ( "div" )
//   setTimeout (() => document.body.appendChild (elem), 1000 * delta++)
//   elem.style = `
//        position: absolute;
//        width: ${radius}px;
//        height: ${radius}px;
//        border-radius: 50%;
//        border: solid 1px green;
//   `
//   if ( radius > 40 ) circle (radius -= 20)
// }

var typeMessage = ( function ( velocity ) {
  let container = demo ? demo :
      document.body.appendChild (
          document.createElement ( "h3" )
      )
  container.style = `color: magenta;`
  container.id = "demo"
  var index = 0
  return function ( message ) {
      setTimeout (() => {container.textContent += message [index++]}, 1000 * index)
  if (index < message.lenght) arguments.callee
  }
})( 1 )