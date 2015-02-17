'use strict';

module.exports = function(app){
    app.get('/', function(req, res){
        console.log('Serving request for GET');
        res.render('index');
    });

    app.get('/admin', function(req, res){
        console.log('Serving request for admin');
        res.render
    });

    app.post('/login', function(req, res){
        console.log(req.body);
        var user = req.body.User;
        var pass = req.body.Password;
        console.log("post received: %s %s", user, pass);
        res.render('index');
    });

    app.get('/logout', function(req, res){
        console.log('logout');
        req.session.user = undefined;
        res.redirect('/');
    });
};