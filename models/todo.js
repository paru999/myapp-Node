const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    name:String,
    description:String,
    status:String,
    date:String
})

module.exports = mongoose.model('Todos', todoSchema);