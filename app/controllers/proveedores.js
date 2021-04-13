var { executeGet, executeSet } = require('../services/_sql').modules

// Consultas de productos
const { config } = require('../assets/config').modules

// Models de los datos
const { suppliers } = require('../models/supplier')


exports.getProveedoresIdProducts = async (req, res, next) => {
    try {
        const query = req.query
        query.id = req.params.id
        const { mainSuppliers, getSuppliersProducts } = config.sqlRoutes
        let result = await executeGet(mainSuppliers, getSuppliersProducts, query)
        let itemsFormated = suppliers(result)
        res.status(200).json({ state: 'correct', items: itemsFormated })
    } catch (error) {
        res.status(500).json({ state: 'incorrect', result: error })
    }
}
exports.deleteProveedoresId = async (req, res, next) => {
    try {
        const query = req.query
        query.id = req.params.id
        const { mainSuppliers, deleteSupplier } = config.sqlRoutes
        await executeSet(mainSuppliers, deleteSupplier, query)
        res.status(200).json({ state: 'correct', message: 'Se ha hecho la eliminación con exito' })
    } catch (error) {
        res.status(500).json({ state: 'incorrect', result: error })
    }

}
exports.getProveedoresId = async (req, res, next) => {
    try {
        const query = req.query
        query.id = req.params.id
        const { mainSuppliers, getSuppliersId } = config.sqlRoutes
        let result = await executeGet(mainSuppliers, getSuppliersId, query)
        let itemsFormated = suppliers(result)
        res.status(200).json({ state: 'correct', items: itemsFormated })
    } catch (error) {
        res.status(500).json({ state: 'incorrect', result: error })
    }

}


