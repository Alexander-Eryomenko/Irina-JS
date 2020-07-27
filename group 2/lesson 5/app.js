function User(name = 'Ilya', age = 45, hobby = 'Nichevo') {
  this.name = name
  this.age = age
  this.hobby = hobby
  var cash = 5000
  var pin = prompt('Установи pin')

  this.getCash = function (sum) {
    if (prompt('Введи pin') === pin) {
      if (cash >= sum) {
        cash -= sum
        console.log('Get your money: ', sum)
      } else console.warn('Нет денег')

    } else console.error('неверный пароль')
  }
}

var user = new User('ilka', 45, 'kyky')
user.getCash(3000)