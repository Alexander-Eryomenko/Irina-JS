// const promise = new Promise ((resolve, reject) => {
//   console.log (resolve)
//   console.log (reject)
// })

// promise.then(response => console.log(response))

const promise = fetch("https://api.github.com/users")
let response
promise.then(resp => response = resp)
response
response.text().then((response) => console.log(response))