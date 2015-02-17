'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// side functions
var validatePresenceOf = function(value){
    return value && value.length;
};
var toLower = function(string){
    return string.toLowerCase();
};
var getId = function(){
    return new Date().getTime();
};

var Post = new Schema({
    'key' : {
        unique : true,
        type : Number,
        default: getId
    },
    'subject' : { type : String,
        validate : [validatePresenceOf, 'Subject is Required']
    },
    'content' : {type : String},
    'author': String,
    'tags' : {
        type : String,
        set : toLower
    }
});


Post.statics.getAll = function(cb){
    var query = this.find({});
    query.sort({'key': -1});
    return query.exec(cb);
};

Post.statics.getAllMeta = function(cb){
    return this.find({}, 'key subject author tags', cb);
};

Post.statics.findByKey = function(key, cb){
    return this.find({'key' : key}, cb);
};

Post.statics.removeByKey = function(key, cb){
    //actual post deletion takes place here
    this.find({'key' : key}).remove(cb);
};

module.exports = mongoose.model('Post', Post);
