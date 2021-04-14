var { executeGet } = require('../services/_sql').modules



// Consultas de productos
const { config } = require('../assets/config').modules

// Models de los datos
const { category } = require('../models/category')



/**
 * Controlador que recibe la petición de busqueda de una categoria, con sus productos asociados
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getCategories = async (req, res, next) => {
    try {
        const query = req.query
        query.id = req.params.id
        if (query.page == undefined) {
            query.page = 1
        } if (query.rows == undefined) {
            query.rows = 10
        }
        const { mainCategories, getCategories } = config.sqlRoutes
        let result = await executeGet(mainCategories, getCategories, query)
        let itemsFormated = category(result)
        res.status(200).json({ state: 'correct', items: itemsFormated })
    } catch (error) {
        res.status(500).json({ state: 'incorrect', result: error })
    }


}