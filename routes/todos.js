const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos)

router.post('/createTodo', todosController.createTodo)
router.post('/createOuting', todosController.createOuting)

router.put('/markComplete', todosController.markComplete)
router.put('/markOutingComplete', todosController.markOutingComplete)

router.put('/markIncomplete', todosController.markIncomplete)
router.put('/markOutingIncomplete', todosController.markOutingIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)
router.delete('/deleteOutTodo', todosController.deleteOutTodo)

module.exports = router