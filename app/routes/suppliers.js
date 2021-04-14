// Dependencias
const express = require('express')
const router = express.Router()


// Controladores
const { getSuppliersIdProducts, deleteSupplierId, getSupplierId } = require('../controllers/suppliers')



// Rutas para el consumo de los servicios relacionados con los proveedores
router.get('/:id/products', getSuppliersIdProducts)
router.delete('/:id', deleteSupplierId)
router.get('/:id', getSupplierId)

module.exports = router
