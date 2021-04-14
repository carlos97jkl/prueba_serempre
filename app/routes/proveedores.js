// Dependencias
const express = require('express')
const router = express.Router()


// Controladores
const { getProveedoresIdProducts, deleteProveedoresId, getProveedoresId } = require('../controllers/proveedores')



// Rutas para el consumo de los servicios relacionados con los proveedores
router.get('/:id/products', getProveedoresIdProducts)
router.delete('/:id', deleteProveedoresId)
router.get('/:id', getProveedoresId)

module.exports = router
