
// Module dependencies
var express = require('express');
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

// configure app
var app  = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// Routes
require('./routes')(app);

http.createServer(app).listen(8000, function(){
    console.log( "Listening on http://127.0.0.1:8000")
});

module.exports = app;


/*
 // Templates
 var htmlBuffer = fs.readFileSync('views/new.html')

 // main functions
 function renderResponse(request, response){
 response.writeHead(200,{
 'Content-type': 'text/html; charset=utf-8'
 });

 response.end(htmlBuffer);
 }

 function addNewPost(request, response){
 parseBody(request, function(body){
 var post = {
 title : body.title,
 content : body.content
 }
 console.log(post.title);
 console.log(post.content);
 });
 response.end();
 }


 // Utils
 function render404(request,response){
 response.writeHead(404)
 response.end('404 File not found')
 }

 function parseBody(request, callback){
 var body = '';
 request.on('data', function(chunk){
 body += chunk;
 });

 request.on('end', function(){
 callback(qs.parse(body));
 });

 }

 // Routes
 var newPostRegex = new RegExp('^/post/new/?$')
 var newRegex = new RegExp('^/post/?$')

 // Server
 var server = http.createServer(function callback(request,response){
 var path = url.parse(request.url).pathname;

 if (newPostRegex.test(path)){
 renderResponse(request,response)
 }
 else if (newRegex.test(path)){
 addNewPost(request, response);
 }
 else{
 render404(request,response)
 }
 })

 server.listen(8000)

 */