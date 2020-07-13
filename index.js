const express = require('express')
const path = require('path')
const sqlz = require('./util/database')
const app = express()
const todoRouter = require('./routes/todo')
const sequelize = require('./util/database')
const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use('/api/todo', todoRouter)

app.use((req, res, next) => {
  res.sendFile('/index.html')
})

async function start() {
  try {
    await sqlz.sync()
    app.listen(PORT)
  } catch (error) {
    throw error
  }
}

start()