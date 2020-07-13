var letters = []
var str = "Backend As A Service"
var arrStr = str.split(' ')
for ( var i = 0; i < arrStr.length; i++ ){
    var firstLetter = arrStr[i].charAt(0) + ','
    console.log (firstLetter)
}


function tip (type) {

    if (typeof type === 'number'){
       return console.log (new Date ())
    }
    else {
        console.log ("Неверный тип данных")
    }
}

tip (5)
tip ('5')

