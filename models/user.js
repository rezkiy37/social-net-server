const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    name: String,
    age: Number,
    status: String,
    followed: Boolean
})

module.exports = model('User', userSchema)