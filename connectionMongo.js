/**
author: Alex Berrocal T.
date: 2015/01/12
description: Connection for MongoDB.
**/
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bot')

module.exports = mongoose
