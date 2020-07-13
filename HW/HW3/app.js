//task 1
function self() {

  for (var i = 0; i < arguments.length; i++) {
    console.log(`Переданный агргумент ${i+1}: ${arguments[i]}`)
  }
  console.log(`Имя функции: ${arguments.callee.name}`)

}

self(10, false, "google")

//task 2 Не работает

function userInfo() {
  return `Дата регистрации: ${registered} ? ${this['data']} : Незарегистрированый пользователь: ${this['name']}`
}

var obj1 = {
  name: 'Alex',
  registered: true,
  data: Date(2018, 04, 23)
}

var obj2 = {
  name: 'Alena',
  registered: false,
  data: ''
}

obj1.getInfo = function userInfo() {}

obj2.getInfo = function userInfo() {}

var objFirst = obj1.getInfo()
var objSecond = obj2.getInfo()