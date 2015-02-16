'use strict';

module.exports = function(app){
    app.get('/', function(req, res){
        console.log('Serving request for GET');
        res.render('index');
    });

    app.get('/login', function(req, res){
        console.log('Serving request for login POST (user & passwd');
        var user = req.body.User;
        var pass = req.body.Password;

        res.render('index');
    });
};