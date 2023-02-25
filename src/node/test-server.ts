import http from 'http'

http
  .createServer((req, res) => {
    res.writeHead(200)
    res.end('Hello World! \nI am krasauchik! \n^_^')
  })
  .listen(8080)
