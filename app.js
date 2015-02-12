var http = require('http')
var fs = require('fs')
var url = require('url')

function renderResponse(request, response){
    var htmlBuffer = fs.readFileSync('templates/post/new.html')

    response.writeHead(200,{'Content-type': 'text/html; charset=utf-8'})
    response.end(htmlBuffer)
}
function render404(request,response){
    response.writeHead(404)
    response.end('404 File not found')
}

var server = http.createServer(function callback(request,response){
    var newPostRegex = new RegExp('^/post/new/?$')
    var path = url.parse(request.url).pathname
    if (newPostRegex.test(path))
        renderResponse(request,response)
    else
        render404(request,response)
})

server.listen(8000)

console.log( "Listening on http://127.0.0.1:8000")