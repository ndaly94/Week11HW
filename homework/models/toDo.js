const mongoose = require('mongoose');


const toDoSchema = new mongoose.Schema({
    title: { type: String, required: true }, 
    description : String,
    completed: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now }
})

const ToDo = mongoose.model('User', toDoSchema)

module.exports = ToDo;

