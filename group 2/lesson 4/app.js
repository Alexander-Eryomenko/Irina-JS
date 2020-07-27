function Sample(name = 'Google') {
  this.name = name
}

Sample.prototype.say = function () {
  console.log(`Hello ${this.name}`)
}

var instance1 = new Sample('Safari')
var instance2 = new Sample('Mozilla')
var instance3 = new Sample('Edge')

instance1.say()
Hello Safari

instance2.say()
Hello Mozilla

instance3.say()
Hello Edge
instanse4.say()
Hello Google