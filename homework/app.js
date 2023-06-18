const express = require('express');
const morgan = require('morgan')
const app = express()
const methodOverride = require('method-override')
const jsxEngine = require('jsx-view-engine')
const toDoRoutes = require('./routes/toDoRoutes')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('combined'))
app.use('/', toDoRoutes)
app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

module.exports = app