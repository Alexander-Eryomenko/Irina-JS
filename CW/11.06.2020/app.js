// var container = document.body
// for (var item of [1, 2, 3, 4, 5]) {
//   var elem = document.createElement('div')
//   elem.style = `
//       width: ${450 - 50 * item}px;
//       height: ${450 - 50 * item}px;
//       border: 1px solid red;
//       margin: 0 auto;

//   `
//   console.log(elem.style)
//   container.appendChild(elem)
//   container = elem
// }
// ========================================
// var container = document.body
// for (var item of [1, 2, 3, 4, 5]) {
//   container = container.appendChild(document.createElement('div'))
//   container.style = `
//       width: ${450 - 50 * item}px;
//       height: ${450 - 50 * item}px;
//       border: 1px solid red;
//       margin: 0 auto;
//   `
//   container.id = `crocodile${item}`
// }

// var colection = document.getElementsByTagName('div')
// console.log(colection instanceof Array)
// for (var item of colection) {
//   console.log(item)
// }

// document.querySelectorAll('div')
// document.body.appendChild(document.createElement('div'))

// var nodeList = document.querySelectorAll('div')

// document.body.appendChild(document.createElement('div'))
// console.log(nodeList)
// console.log(colection)

// var input = document.body.appendChild(document.createElement('input'))
// input.type = 'radio'
// var input1 = document.body.appendChild(document.createElement('input'))
// input.type = 'color'
// console.log(document.querySelectorAll('input[type = color]'))
// ======================================

//События
var button = document.body.appendChild(document.createElement('button'))
button.innerText = 'click my'
button.onclick = function (event) {
  console.log(event)
}

var elem = document.body.appendChild(document.createElement('div'))
elem.style = `
  width: 400px;
  height: 400px;
  background: #ffa;
  transition: 1s linear all;
`
elem.onmouseover = function (event) {
  event.target.style.width = '200px'
  event.target.style.height = '200px'
}
elem.onmouseout = function (event) {
  event.target.style.width = '400px'
  event.target.style.height = '400px'
}