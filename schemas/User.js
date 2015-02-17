'use strict';

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var User = new Schema({
    username : {
        type : String,
        index : { unquique : true }
    },
    'password' : String
});

User.statics.validateUser = function(username, password, cb){
    this.find({'username' : username}, function(err, response){
        var user = response[0];
        if(!user || response.length === 0){
            cb(new Error('AuthFailed : Username does not exist'));
        }else{
            if(password == user.password){
                console.log('Authenticated User ' + username);
                cb(null, user);
            }else{
                cb(new Error('AuthFailed : Invalid Password'));
            }
        }
    });
};

module.exports = mongoose.model('User' , User);
