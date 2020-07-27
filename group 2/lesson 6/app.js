var button = document.body.appendChild(document.createElement('button'))
button.innerText = 'Click'
button.style = `
  width: 100px;
  height: 50px;
  background-color: #f0f;
  border: none;
  outline: none;
`
button.onclick = function (event) {
  console.dir(event)
}

var size = 400
var container = document.body


while (size >= 100){
  container = container.appendChild(document.createElement('div'))
  container.id = size
  container.style = `
    width: ${size}px;
    height: ${size}px;
    border: 1px solid #f0f;
  `
  container.onclick = function (event) {
    event.stopPropagation()
    console.log(`this:\n`, this.id)
    console.log(`EventTarget:\n`, event.target.id)
    console.log(`eventPhase:\n`, event.eventPhase)
  }
  size -= 50
}

var input = document.body.appendChild(document.createElement('input'))
input.onchange = function (event){
  console.log(`change: `, event.target.value)
}
input.oninput = function (event){
  console.log(`input: `, event.target.value)
}

document.body.onmousemove = function (event) {
  console.log(event.clientX)
  console.log(event.clientY)
}

var p = document.body.appendChild(document.createElement('p'))
p.innerText = 'Наведи'
p.textOn = 'Hello'
p.textOut = 'Go to the Hell'
p.onmousemove = function (event) {
    
    event.target.innerText = event.target.textOn
}
p.onmouseout = function (event) {
    event.target.innerText = event.target.textOut
}

var img = document.body.appendChild(document.createElement('img'))
img.src = 'https://unews.pro/insert/20200724/Unews20200724541080180999.png'
img.style = `
  width: 200px;
  transition: all 0.5s;
`
img.onmousemove = function (event) {
    
    event.target.style.transform = `rotate(180deg)`
}
img.onmouseout = function (event) {
    event.target.style.transform = `rotate(-180deg)`
}
