// Dependencias
const express = require('express')
const router = express.Router()


// Controladores
const { getCategories } = require('../controllers/categories')

// Rutas para el consumo de los servicios relacionados con categorias
router.get('/:id/products', getCategories)



module.exports = router
