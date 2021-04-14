// Dependencias
const express = require('express')
const router = express.Router()


// Rutas especificas
const productos = require('./productos')
const categories = require('./categorias')
const proveedores = require('./proveedores')
// Rutas principales para el consumo de los servicios de producstos, categorias y  proveedores
router.use('/products', productos)
router.use('/categories', categories)
router.use('/suppliers', proveedores)

module.exports = router









