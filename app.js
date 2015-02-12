var http = require('http')

var server = http.createServer(function callback(request,response){
    response.writeHead(200,{'Content-type': 'text/plain; charset=utf-8'})
    response.write('Hello World')
    response.end()
})

server.listen(8000)

console.log( "Listening on http://127.0.0.1:8000")