function parent() {
    console.log(arguments)
}
parent()

const child = parent.bind(null, 'google')
child()

const first = child.bind(null, 'mozilla')
first()

const button = document.body.appendChild(document.createElement('button'))
button.innerText = 'Start'
const user = {
    name: 'Irina',
    sayHello() {
        console.log(`Hello ${this.name}`)
    },
    changeName: (name) => {
        this.name = name
    }
}

button.onclick = function (event) {
    event.target.innerText = this.name
    this.sayHello()
}.bind(user)
ƒ(event) {
    event.target.innerText = this.name
    this.sayHello()
}
window.name = 'chrome'
user.changeName('mozilla')
window.name "mozilla"

const User = function () {
    this.name = 'Ilya'
    this.sayHello = (message) => {
      console.log(this.name, message)
    }
  }
  const user = new User
  user.sayHello('privet')


  class Rectang {
    constructor () {
      this.name = 'Ivan'
    }
    sayHello() { console.log(`Hello ${this.name}`) }
  }
  const User = function() {
    this.name = 'Vasya'
  }
  User.prototype.sayHello = (message) => {
    console.log(`${message} ${this.name}`)
   }

   const user1 = new User
   for (let item in user1){
    console.log(item)
  }

  for (let prop in rect){
    console.log(prop)
  }


  class Base {
    constructor() {
      this.type = 'base'
    }
    changeType(type){ this.type = type }
  }
  class Child extends Base {
    constructor() {
      super()
      this.speciality = 'Dev'
      let dima = 15
      this.showDima = () => { console.log(dima) }
    }
    changeSpeciality(spec) { this.speciality = spec }
  }


  class Animal {
    constructor() {
      this.type = 'Animal'
    }
  
    eat(food) { console.log(`I'm eating ${food}`) }
  }
  undefined
  class Rabit extends Animal {
    constructor() {
    super()
    this.subType = 'Rabit'
    }
    run(from) { console.log(`i'm running from ${from}`) }
  }
  undefined
  class Wolf extends Animal {
    constructor() {
      super()
      this.subType = 'Wolf'
    }
    run(to) { console.log(`I'm running for the ${to}`) }
  }