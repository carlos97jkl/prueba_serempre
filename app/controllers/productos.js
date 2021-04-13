var { executeGet, executeSet } = require('../services/_sql').modules

// Consultas de productos
const { config } = require('../assets/config').modules

// Models de los datos
const { products } = require('../models/products')


exports.getProductosSearch = async (req, res, next) => {
    try {
        let query = req.query
        if (query.productName || query.categoryName || query.supplierName) {
            const { mainProducts, getProducts } = config.sqlRoutes
            let result = await executeGet(mainProducts, getProducts, query)
            let itemsFormated = products(result)
            res.status(200).json({ state: 'correct', items: itemsFormated })
        } else {
            res.status(400).json({ state: 'correct', message: 'Solicitud no valida, se necesita al menos un parametro en query' })
        }
    } catch (error) {
        res.status(500).json({ state: 'incorrect', result: error })
    }

}
exports.getProductosId = async (req, res, next) => {
    try {
        const { mainProducts, getProducts } = config.sqlRoutes
        let body = {}
        const { id } = req.params
        body.id = id
        let options = {}
        options.where = false
        let result = await executeGet(mainProducts, getProducts, body, options)
        let itemsFormated = products(result)
        res.status(200).json({ state: 'correct', result: itemsFormated })
    } catch (error) {
        res.status(500).json({ state: 'error', result: error })
    }

}
exports.putProductosId = async (req, res, next) => {
    try {
        const { mainProducts, putProducts } = config.sqlRoutes
        const body = req.body
        const { id } = req.params
        body.id = id
        body.discontinued = body.discontinued ? 1 : 0
        await executeSet(mainProducts, putProducts, body)
        res.status(200).json({ state: 'correct', message: 'Se ha realizado la modificación con exito' })
    } catch (error) {
        res.status(500).json({ state: 'error', result: error })
    }



}
exports.postProductos = async (req, res, next) => {
    try {
        const { mainProducts, postProducts } = config.sqlRoutes
        const body = req.body
        if (body != undefined) {
            body.discontinued = body.discontinued ? 1 : 0
            await executeSet(mainProducts, postProducts, body)
            res.status(200).json({ state: 'correct', message: 'Se ha agregado el dato con exito' })
        } else {
            res.status(400).json({ state: 'incorrect', message: 'No se encontraron datos para agregar' })
        }
    } catch (error) {
        res.status(500).json({ state: 'error', result: error })
    }

}
exports.getProductos = async (req, res, next) => {
    try {
        let query = req.query
        query.allProducts = true
        if (query.order == 'desc' || query.order == undefined) {
            query.desc = true
        } else if (query.order == 'asc') {
            query.desc = false
        }
        if (query.page == undefined) {
            query.page = 1
        } if (query.rows == undefined) {
            query.rows = 10
        }
        let options = {}
        options.where = false
        const { mainProducts, getProducts } = config.sqlRoutes
        let result = await executeGet(mainProducts, getProducts, query, options)
        let itemsFormated = products(result)
        res.status(200).json({ state: 'correct', currentPage: page, items: itemsFormated, perPage: rows })
    } catch (error) {
        res.status(500).json({ state: 'error', result: error })
    }

}