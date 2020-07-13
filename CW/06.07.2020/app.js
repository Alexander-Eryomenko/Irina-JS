var request = new XMLHttpRequest
request.open(
  'GET',
  'https://api.github.com/users'
)
request.onreadystatechange = function(event) {
  console.log(this.readyState)
  if (this.readyState === 4) {
    if (this.status === 200) {
      console.log(this.responseType)
      console.log(JSON.parse(this.responseText))
    }
  }
}

request.send()