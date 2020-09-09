const letter = [],
      str = 'Backend As A Service',
      strArr = str.split(' ')

for (let i of strArr) {
    letter.push(i[0])
}

console.log(letter)
console.log(letter.join(', '))

//

function tip (arg) {

    if (typeof arg === 'number') console.log (new Date ())
    else console.log ("Неверный тип данных")
}

tip (5)
tip ('5')

//

const group = [
    {
        name: 'Ivan',
        lastName: 'Nesterenko',
        age: 25,
        notebook: false
    },
    {
        name: 'Vladimir',
        lastName: 'Burunov',
        age: 29,
        notebook: true
    },
    {
        name: 'Artem',
        lastName: 'Osipenko',
        age: 54,
        notebook: true
    }
]

function getStudentsList (arr) {
    for (let i of arr) {
        console.log(JSON.stringify(i).split(','))
    }
}

getStudentsList(group)



