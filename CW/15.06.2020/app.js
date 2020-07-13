// var arr = [1, 2, 3, 4, 5]
// var container = document.body
// for (var el of arr) {
//   var container = container.appendChild(document.createElement('div'))
//   container.style = `
//   width: ${100 - 20 * el}px;
//   height: ${100 - 20 * el}px;
//   border: 1px solid red;
//   position: relative;
//   left: 50%;
//   transform: translateX (-50px);
//  `
//   container.id = el
//   container.onclick = function (event) {
//     event.stopPropagation()
//     console.log(`event target: ${event.target.id}`)
//     console.log(`event this: ${event.this}`)
//     console.log(event.eventPhase)
//   }
// }
// console.dir(document.getElementById('3'))

// document.getElementById('3').addEventListener('click', function (event) {
//   event.stopPropagation()
//   console.log('I"m the third')
// })
// document.getElementById('4').addEventListener('click', function (event) {
//   console.log('I"m the last')
// })
// document.getElementById('1').addEventListener('click', function (event) {
//   console.log('I"m the first')
// })
// document.body.addEventListener('sunrise', function(event) {
//   document.body.style.background = '#f50'
// })

// var button = document.body
//   .appendChild(document.createElement('button'))
// button.innerText = 'Sunrise'
// button.onclick = function(event) {
//   document.body.dispatchEvent (new Event('sunrise'))
// }
// document.body.addEventListener('shine', function(event) {
//   document.body.style.background = '#009'
// })

// var button = document.body
//   .appendChild(document.createElement('button'))
// button.innerText = 'Shine'
// button.onclick = function(event) {
//   document.body.dispatchEvent (new Event('shine'))
// }

var star = document.body.appendChild(document.createElement('div'))
star.style = `
    width: 3px;
    height: 3px;
    background: #fff;
    position: fixed;
    left: ${Math.random() * window.innerWidth}
    top: ${Math.random() * window.innerHeight}
`

var button = document.body
  .appendChild(document.createElement('button'))
button.innerText = 'star'
button.onclick = function(event) {
  document.body.dispatchEvent (new Event('star'))
}
document.body.addEventListener('star', function(event) {
    document.body.style.background = '#009'
  })