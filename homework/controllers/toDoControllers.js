const ToDo = require('../models/toDo');
const morgan = require('morgan')

// GET /todos all ToDo Items
exports.getToDos = async (req, res) => {
    try 
    {
        const currentToDos = await ToDo.find({})
        console.log('this works', currentToDos)
        res.render('toDos/Index', {
            toDos: currentToDos
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

// POST /todos create a new ToDo Item
exports.createToDo = async (req, res) => {
    if (req.body.completed === 'on'){
        req.body.completed = true
    }else{
        req.body.completed = false
    }
    try {
        const newToDo = await ToDo.create(req.body)
        console.log(newToDo._id, "this works?")
        res.redirect(`/${newToDo._id}`)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

// PUT /todos/:id update specific item
exports.updateToDo = async (req, res) => {
    if(req.body.completed === 'on'){
        req.body.completed = true
    } else {
        req.body.completed = false
    } try {
        await ToDo.findByIdAndUpdate({ '_id': req.params.id },
        req.body, { new: true })
        .then(() => {
            res.redirect(`ToDos/${req.params.id}`)
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

//NEW PAGE
exports.newPage = async (req, res) => {
    try {       
        res.render('toDos/New')
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

//SHOW Page
exports.showThisToDo = async (req, res) => {
    try {
        const currentToDos = await ToDo.findOne({_id: req.params.id})
        console.log('its working', currentToDos)
        res.render('toDos/Show.jsx', {
            toDos: currentToDos
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

// Delete /todos/:id Delete a specific to Do
exports.deleteToDo = async (req, res) => {
    try {
        await req.ToDo.deleteOne()
        res.json({ message: 'User deleted' })
    }catch(error){
        res.status(400).json({ message: error.message })
    }
}
