// Dependencias
const express = require('express')
const router = express.Router()


// Rutas especificas
const products = require('./products')
const categories = require('./categories')
const suppliers = require('./suppliers')
// Rutas principales para el consumo de los servicios de producstos, categorias y  proveedores
router.use('/products', products)
router.use('/categories', categories)
router.use('/suppliers', suppliers)

module.exports = router









