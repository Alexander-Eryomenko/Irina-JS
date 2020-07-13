const Constructor = function () {
  this.name = name
  this.sayHello = () => {
    console.log(`${this.name}, hello.`)
  }
}

const user = {
  name: 'Vasya',
  sayHello() {

  }
}

const numbers = []

// numbers instanceof Array
// true
// numbers instanceof Object
// true
// numbers instanceof Number
// false
// Function instanceof Object
// true
// Object instanceof Function
// true

// function first() {
//   setTimeout(
//     () => console.log('First'),
//       Math.random() * 5000
//     )
// }
// function second() {
//   setTimeout(
//     () => console.log('Second'),
//       Math.random() * 4500
//     )
// }
// function third() {
//   setTimeout(
//     () => console.log('Third'),
//       Math.random() * 4000
//     )
// }

// first()
// second()
// third()

// const promise = new Promise((resolve, reject) => {
//   if (Math.random() > 0.5) {
//     setTimeout(() => resolve('Success'), 2000)
//   } else reject('Failure')
// })
// promise.then(
//   (response) => console.log(response)),
//   (error) => console.log(error)

new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      setTimeout(() => resolve('Success'), 2000)
    } else reject('Failure')
  }).then(
    (response) => console.log(response)),
  (error) => console.log(error)

const promise1 = new Promise((resolve, reject) => setTimeout(() => {
  Math.random() > 0.5 ?
    resolve('First') :
    reject('failure1')
}, Math.random() * 3000))
const promise2 = new Promise((resolve, reject) => setTimeout(() => {
  Math.random() > 0.5 ?
    resolve('Second') :
    reject('failure1')
}, Math.random() * 3000))
const promise3 = new Promise((resolve, reject) => setTimeout(() => {
  Math.random() > 0.5 ?
    resolve('First') :
    reject('Third')
}, Math.random() * 3000))
Promise.all([promise1, promise2, promise3])

promise1.then(
  response => console.log(response) error => console.warn(error)
)
promise2.then(
  response => console.log(response) error => console.warn(error)
)
promise3.then(
  response => console.log(response) error => console.warn(error)
)

const resolve = () => {
  console.log('Good')
}
const reject = () => {
  console.log('bad')
}

function timer(good, bad) {
  setTimeout(function () {
    Math.random() > 0.5 ? good() : bad()
  }, Math.random() * 3000)
}
// timer(resolve, reject)

const promise = new Promise(timer)

promise.then(resolve, reject)