var mongoose = require('./connectionMongo')

var Schema = mongoose.Schema

var userSchema = new Schema({
  '_id':String,
})

module.exports = mongoose.model('user', userSchema, 'users')
