//Task 1
var group = [{
    name: 'Ivan',
    lastname: 'Petrov',
    age: 23,
    notebook: false,
  },
  {
    name: 'Alexey',
    lastname: 'Vasilev',
    age: 27,
    notebook: true,
  },
  {
    name: 'Sergey',
    lastname: 'Gysev',
    age: 20,
    notebook: true,
  },
];

function getDataOfStudent(arr) {
  var arrStr = []
  for (var obj = 0; obj < arr.length; obj++) {
    var objUser = ''

    for (var key in arr[obj]) {
      objUser += `${key}: ${arr[obj][key]}, `
    }
    arrStr.push(objUser)
  }
  return arrStr
}
var user = getDataOfStudent(group)
console.log(user)

//Task 2
function addStudent(name = 'Arsen', lastName = 'Manukyan', age = 134, notebook = false) {
  group.push({
    name: name,
    lastName: lastName,
    age: age,
    notebook: notebook,
  })

}

addStudent('Danil', 'Ovechkin', 98, true)
addStudent('Anton', 'Gybarev', 32, false)
addStudent()
var user = getDataOfStudent(group)
console.log(user)


//Task 3

function deleteLetters(str) {
  var endStr = ''
  for (var i = 0; i < str.length; i++) {
    if (((str.charCodeAt(i) < 1103) && (str.charCodeAt(i) > 1040)) || (str.charCodeAt(i) === 32))
      endStr += str[i]
  }
  var redStr = endStr.split(' ').filter(n => n).join(' ')
  return redStr
}
deleteLetters("Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик")
"Вчера был настощий праздник"

// Task 5
// var names = ['Артем', 'Иван', 'Василий']
// var lastnames = ['Васильев','Петров','Иванов']
// var allName = []
//   var math = Math.min (names, lastnames)
// for (var index = 0; index < names.length; index++) {
//    allName.push(`${names[index]} ${lastnames[index]}`)
// }
// console.log (allName)