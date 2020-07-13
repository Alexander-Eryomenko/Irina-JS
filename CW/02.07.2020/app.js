var numbers = [1, 2, 3, 4, 5]
numbers.forEach((item, index, arr) => {
    console.log(index, item)
    arr.push(arr.shift())
})
console.log(numbers)
var arr2 = []
numbers.map((item) => item * 5)
numbers.map((item, index) => item * index)
numbers.map((item, index, arr) => {
    index += 1
    console.log(index, item)
})




var sourceArray = [{
        name: "Николай Василенко",
        country: "Украина"
    },
    {
        name: "Дюк Шейн",
        country: "США"
    },
    {
        name: "Демид Швейк",
        country: "Франция"
    },
    {
        name: "Семен Картко",
        country: "Украина"
    },
    {
        name: "Маргарет Джонсон",
        country: "США"
    },
    {
        name: "Филипп Данько",
        country: "Украина"
    },
    {
        name: "Роберт Трамп",
        country: "США"
    },
]
sourceArray.map((item, index) => item.name)

var names = [
    "Николай Василенко",
    "Дюк Шейн",
    "Демид Швейк",
    "Семен Картко",
    "Маргарет Джонсон",
    "Филипп Данько",
    "Роберт Трамп",
]

var countries = [
    "Украина",
    "Франция",
    "Украина",
    "США",
    "Украина",
    "США",
]

names.map((item, index) => ({
    name: item,
    country: this[index]
}))

names.map((item, index, arr) => ({
    name: item,
    country: countries[index]
}))

names.map(function (item, index, arr) {
    return {
        name: item,
        country: this[index]
    }
}, countries)

var sourceArray = [{
        name: "Николай Василенко",
        country: "Украина"
    },
    {
        name: "Дюк Шейн",
        country: "США"
    },
    {
        name: "Демид Швейк",
        country: "Франция"
    },
    {
        name: "Семен Картко",
        country: "Украина"
    },
    {
        name: "Маргарет Джонсон",
        country: "США"
    },
    {
        name: "Филипп Данько",
        country: "Украина"
    },
    {
        name: "Роберт Трамп",
        country: "США"
    },
]

sourceArray
    .filter((item) => item.country === "Украина")
    .map((item, index) => item.name)
    .find((item) => item.country === "Украина").name
    .find((item) => item.indexOf('Николай') === 0).name

    [1, 2, 3, 4, 5].reduce( ( accumulator, item ) => {
        document.body.innerHTML += `<p>${accumulator} : ${item}</p>`
        return accumulator += item
    })

    const obj = {}
    const str = 'Irina'

    obj[str] = 5

    const props = ['a', 'b', 'c', 'd',]
    props.forEach((prop, index) => {
        obj[prop] = index
    })