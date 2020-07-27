const timer = (message) => {
  return new Promise((resolve) => {
  setTimeout(() => resolve(message), Math.random() * 3000)
 }) 
}

const sendMessages = async () => {
  console.log(await timer('hello'))
  console.log(await timer('bye'))
  console.log(await timer('welcom'))
}
sendMessages()

const func = async () => {
  const users = await (await fetch('https://api.github.com/users')).json()
  const image = document.body.appendChild(document.createElement('img'))
  image.src = users[2].avatar_url  
}