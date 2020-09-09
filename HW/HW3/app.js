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
  if (this.registered === true) console.log(`Дата регистрации: ${this.data}`)
  else console.log(`Незарегистрированный пользователь: ${this.name}`)

}

var obj1 = {
  name: 'Alex',
  registered: true,
  data: '21.12.2018'
}

var obj2 = {
  name: 'Alena',
  registered: false,
  data: '10.04.2020'
}

obj1.getInfo = userInfo
obj2.getInfo = userInfo

obj1.getInfo()
obj2.getInfo()