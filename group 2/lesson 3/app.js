function sample() {
  var localVariable = 10

  function child() {
    console.log(localVariable)
    console.log(this)

  }
  child()
  console.log(this)
}

// sample()
// window.sample()

var user = {
  name: 'Vasya',
  sayName: function () {
    console.log(this.name)
  }
}

// user.sayName()

window.name = 'Chrome'

function sayName() {
  console.log(this.name)
}

// sayName()

var user = {
  name: 'Vasya',
  sayName: function () {
    console.log('Объект user:', this.name)
  }
}

function sayName() {
  console.log('Объект window:', this.name)
}

function parent() {
  var localVariable = 10

  function child() {
    console.log(localVariable)
    console.log(this)

    function sample() {
      var alfa = 20
      console.log(alfa, localVariable)
    }
  }
  child()
  console.log(this)
}

function test() {
  console.log(localVariable)
  var localVariable = 10
}

// test()

function test() {
  console.log(localVariable)
  // var localVariable = 10
}

// test()

var localVariable = 5

// test()

function test() {
  sample()

  function sample() {
    console.log('Hello')
  }
}
// test()
//TypeError
// function test() {
//   sample()

//   var sample = function() {
//     console.log('Hello')
//   }
// }

// while(Math.random() > 0.4) {
//   console.log('hello')
// } 

var arr = ['1', '2', '3', '4', '5']
var i = 0
// while (i < arr.length) {
//   console.log(arr[i++])
// }

do {
  console.log(arr[i++])
} while (i < arr.length)

var i = 0
while (i < arr.length) {
  if (arr[i] > 50) continue
  console.log(arr[i++])
}