require("dotenv").config()
require('./config/db')
const express = require("express")
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
// const methodOverride = require("method-override")
const app = express()
// const db = require("./models/db")
const PORT = process.env.PORT || 3008

app.use(express.json())
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})

app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico' )))
app.use(express.static(path.join(__dirname, 'build')))
// app.use(express.urlencoded({extended: true}))
// app.engine("jsx", require("jsx-view-engine").createEngine())
// app.set("view engine", "jsx")
// app.use(methodOverride("_method"))
// app.use(express.static("public"))

app.use("/api/todos", require("./routes/api/todos"))

app.get('/api/test', (req, res) => {
    res.json({'eureka': 'you have found it'})
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`I hear you ${PORT}...`)
})