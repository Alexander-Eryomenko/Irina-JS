////
const a = {
    a: 1
}
const b = {
    b: 2
}
const c = {
    c: 2
}
const abc = Object.assign({}, a, b, c)
const d = {
    d: [1, 2, 3]
}
Object.assign(abc, d) //добавилась ссылка на массив
abc.d[2]
abc.d[2] = 5
const clone = JSON.parse(JSON.stringify(abc))
clone
clone.a = 10
clone
abc
clone.d[1] = 4
abc
clone
//////
const createElem = () => {
    const p = document.body.appendChild(document.createElement('p'))
    p.style = `
  width: 200px;
  height: 200px;
  padding: 20px;
  border: 1px solid #f0f;
  text-align: center;
  background-color: #f5f
`
    p.innerText = 'Hello word'
    p.onclick = function (event) {
        event.target.style.color = '#00ff00'
    }
    return p
} // не удобно
const createEl = () => Object.assign(
    document.body.appendChild(document.createElement('p')), {
        style: `
      width: 200px;
      height: 200px;
      padding: 20px;
      border: 1px solid #f0f;
      text-align: center;
      background-color: #f5f;
      `,
        innerText: 'Hello word',
        onclick: function (event) {
            event.target.style.color = '#00ff00'
        }
    }
)

/////
Object.assign({}, 'start')
Object.assign({}, 'start', 'finish')
Object.assign([], 'start', 'finish')

const abc = {
    a: 1,
    b: 2,
    c: 3
}

Object.assign(abc, {
    a: 5
})
Object.assign(abc, {
    d: 5
})
const arr = Object.assign([], abc)
arr.push(5)

for (let item of arr) {
    console.log(item)
}
Object.assign({}, 'hello')

const str = 'Сегодня в Тольятти случился немножечко Безумный Макс. КАМАЗ с полыхающим и хлопающимся на ходу грузом влетел на пункт скупки металла и был потушен прибывшим пожарным расчетом.'
const regExpr = letter => eval(`/${letter}/g`)
const result = {}
new Set(str.split(''))
    .forEach(letter => Object
        .assign(result, {
            [letter]: str.match(regExpr(letter)).length
        }))

console.log(result)
////
var obj = {
    type: "Треугольник",
    size: 150,
    color: "blue"
}



Object.prototype.addNumber = function () {}
Object.prototype.addName = function () {}
for (let prop in obj) {
    console.log(prop)
}

Object.keys(obj)
Object.getOwnPropertyDescriptor(obj, 'name')
Object.defineProperty(obj, 'crocodile', {
    configurable: true,
    enumerable: false
})
Object.getOwnPropertyNames(obj)
///

'5 + 8'.split('+')
    .map(item => parseInt(item))
    .reduce((accum, elem) => accum += elem)

var operation = '+'
var str = '5 + 8'
str.split(operation)
    .map(item => parseInt(item))
    .reduce((accum, elem) => eval(`accum ${operation} elem`))
// const res = {}
// let propName = 'Olga'
// let propValue = 25
// const result = Object.assign(res, {[propName]:propValue})