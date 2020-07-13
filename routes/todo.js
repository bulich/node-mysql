const {Router} = require('express')
const Todo = require('../models/todo.js')
const router = Router()

// Получение списка задач
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll()
    res.status(201).json(todos)
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
router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(+req.params.id)
    todo.done = req.body.done
    todo.save()
    res.status(201).json({todo})
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})

// удаление задачи
router.delete('/:id', async (req, res) => {
  try {
    const todos = await Todo.findAll({
      where: {
        id: +req.params.id
      }
    })
    todos[0].destroy()
    res.status(204).json({})
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})

module.exports = router