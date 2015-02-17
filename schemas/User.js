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