const {Router} = require('express')
const Todo = require('../models/todo.js')
const router = Router()

// Получение списка задач
router.get('/', (req, res) => {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})

// Создание задачи
router.post('/', async (req, res) => {
  try {
    const todo = await Todo.create({
      title: req.body.title,
      done: false
    })
    res.status(201).json({todo})
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})

// Изменение задачи
router.put('/:id', (req, res) => {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})

// удаление задачи
router.delete('/:id', (req, res) => {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})

module.exports = router