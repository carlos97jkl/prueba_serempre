// Dependencias
const express = require('express')
const router = express.Router()


// Controladores
const { getProductosSearch, getProductosId, putProductosId, postProductos, getProductos } = require('../controllers/productos')



// Rutas  para el consumo de los servicios relacionados con los productos
router.get('/search', getProductosSearch)
router.get('/:id', getProductosId)
router.put('/:id', putProductosId)
router.post('/', postProductos)
router.get('/', getProductos)



module.exports = router
