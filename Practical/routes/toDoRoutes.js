const express = require('express');
const router = express.Router();
const toDoController = require('../controllers/toDoControllers');


// GET /todos all ToDo Items
router.get('/todos', toDoController.getToDos);

// POST /todos create a new ToDo Item
router.post('/todos', toDoController.createToDo);

// PUT /todos/:id update a specific item 
router.put('/:id', toDoController.updateToDo);

//NEW PAGE
router.get('/todos/new', toDoController.newPage);

//SHOW PAGE show a specific ID
router.get('/todos/:id', toDoController.showThisToDo);

// Delete /todos/:id Delete a specific to Do
router.delete('/todos/:id', toDoController.deleteToDo);

module.exports = router;