const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req)
  if(req.url === '/') {
  res.end('<h1>Welcome to our home page</h1>')
  }
  else if(req.url === '/about') {
    res.end('<h1>Here is our short history</h1>')
  }
  else {
  res.end(`
    <h1>Oops!<h1>
    <p>We can't seem to find the page that you are looking for</p>
    <a href='/'> Back Home </a>
  `)
  }
})

server.listen(5000)