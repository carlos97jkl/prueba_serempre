// Dependencias
const express = require('express')
const router = express.Router()


// Controladores
const { getCategories } = require('../controllers/categorias')

// Rutas 

router.get('/:id/products', getCategories)



module.exports = router
