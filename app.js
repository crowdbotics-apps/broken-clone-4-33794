const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'build/') ))

app.get('/', (req, res) => {
  res.render(path.join(__dirname, 'build/', 'index.html'))
})

module.exports = app;