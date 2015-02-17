'use strict';

var User  = require('../schemas/User');
var Post = require('../schemas/Post');

// side functions

var getAllMeta = function(req, res, next){
    Post.getAllMeta(function(err, postsList){
        if(!err && postsList){
            req.postsList = postsList;
        }
        next(err);
    });
};



module.exports = function(app){
    app.get('/', function(req, res){
        console.log('Serving request for GET');
        res.render('index');
    });

    app.get('/admin', getAllMeta, function(req, res){
        console.log('Serving request for admin');
        if (req.session.user){
            res.render('admin', {'postList' : req.postList});
        }
        else{
            res.redirect('/');
        }
    });

    app.post('/admin/post/save', function(req, res){
        var subject = req.body.postSubject;
        var content = req.body.postContent;
        var tags = req.body.postTags;
        if (subject != '' || content != '' || tags != ''){
            var post = new Post();
            post.subject = subject;
            post.content = content;
            post.author = req.session.user.name;
            post.tags = tags;

            post.save(function(err,response){
                if (err){
                    console.log('Error');
                    res.redirect('/admin');
                }
                else {
                    res.redirect('/admin');
                }
            });
        }
    });

    app.post('/login', function(req, res){
        console.log(req.body);
        var user = req.body.User;
        var pass = req.body.Password;

        User.validateUser(user, pass, function(err, user){
            if (err){
                //res.json({retStatus : 'failure'});
                res.render('error');
            }else{
                req.session.user = user;
                //res.json({ retStatus : 'success', user : user});
                res.redirect('/');
            }
        });
    });

    app.get('/logout', function(req, res){
        console.log('logout');
        req.session.user = undefined;
        res.redirect('/');
    });
};