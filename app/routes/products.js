// Dependencias
const express = require('express')
const router = express.Router()


// Controladores
const { getProductsSearch, getProductsId, putProductsId, postProducts, getProducts } = require('../controllers/products')



// Rutas  para el consumo de los servicios relacionados con los productos
router.get('/search', getProductsSearch)
router.get('/:id', getProductsId)
router.put('/:id', putProductsId)
router.post('/', postProducts)
router.get('/', getProducts)



module.exports = router
