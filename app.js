const express = require('express')
const index = require('./app/routes/index')
const app = express()
const { urlencoded, json } = require('body-parser');
app.use(urlencoded({
    extended: true
}))
app.use(json())

//Ruta de acceso principal al aplicativo
app.use('/api', index)
app.listen(3002)