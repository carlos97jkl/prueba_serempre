const sql = require('mssql')
const fs = require('fs')
const path = require('path')
const { render } = require('mustache')
const { config } = require('../assets/config').modules


/**
 * Metodo para conexión a la base de datos
 * @returns 
 */

const connection = async () => {
  try {
    let pool = await sql.connect(config.databaseCredencials
    )
    return pool
  } catch (error) {
    throw 'No se ha podido realizar la conexión a la base de datos'
  }
}

/**
 * Metodo para ejecución de tienen datos o parametros 
 * @param {Carpeta principal en donde se encuentra la consulta} rootDir 
 * @param {Nombre del archivo que tiene la consulta} nameFile 
 * @param {Datos necesarios para la ejecución de la consulta} data 
 * @param {Query con los parametros para busqueda de la petición} query 
 * @param {Parametros adicionales } options 
 * @returns 
 */


const executeSet = (rootDir, nameFile, data, query, options) => {

  return executeQuery(rootDir, nameFile, data, query, options)

}


/**
 * Metodo para consulta de datos a traves de queries
 * @param {Carpeta principal en donde se encuentra la consulta} rootDir 
 * @param {Nombre del archivo que tiene la consulta} nameFile 
 * @param {Query con los parametros para busqueda de la petición} query 
 * @param {Parametros adicionales } options 
 * @returns 
 */

const executeGet = (rootDir, nameFile, query, options) => {
  let data = {}
  return executeQuery(rootDir, nameFile, data, query, options)

}

/**
 * Metodo para busqueda de consultas y ejecución de queries
 * @param {Carpeta principal en donde se encuentra la consulta} rootDir 
 * @param {Nombre del archivo que tiene la consulta} nameFile 
 * @param {Datos necesarios para la ejecución de la consulta} data 
 * @param {Query con los parametros para busqueda de la petición} query 
 * @param {Parametros adicionales } options 
 * @returns 
 */

const executeQuery = async (rootDir, nameFile, data = {}, query = {}, options = { where: true }) => {
  try {
    const pool = await connection()
    query.whereQuery = getWhere(query)
    query.where = options.where
    let sqlQuery = renderSql(rootDir, nameFile, { ...data, ...query })
    console.log(sqlQuery);
    const result = await sendQuery(pool, sqlQuery)
    return result.recordset
  } catch (error) {
    throw error
  }
}

/**
 * Metodo pata ejecución de query espeficica
 * @param {pool de conexión a la base de datos} pool 
 * @param {Consulta sql} sqlQuery 
 * @returns 
 */


const  sendQuery =  async (pool, sqlQuery) => {
    try {
      return await pool.request().query(sqlQuery)
    } catch (error) {
       throw  'Se genero un error ejecutando la consulta, por favor revise los datos enviado e intentelo de nuevo'
    }
}

/**
 * Metodo que crea los where de las consultas basados en las queries de una petición
 * @param {Query de la petición con los parametros de busqueda} query 
 * @returns 
 */


const getWhere = (query) => {
  const keysQuery = Object.keys(query)
  let arrayQuery = keysQuery.map(element => {
    return ` ${element} = '${query[element]}'`
  })
  return arrayQuery.join(' and ')

}

/**
 * Metodo que crea la consulta basado en mustache con los datos y queries enviados desde la consulta
 * @param {Carpeta principal en donde se encuentra la consulta} rootDir 
 * @param {Nombre del archivo que tiene la consulta} nameFile 
 * @param {json donde con los datos con los cuales  se va a ser el render del musctahe de la consulta} json 
 * @returns 
 */


const renderSql = (rootDir, nameFile, json = {}) => {
  var data = ''
  try {
    let route = path.join(__dirname, `../${config.sqlRoutes.rootDatabase}${rootDir}${nameFile}`)
    data = fs.readFileSync(route, 'utf8')
  } catch (error) {
    console.log(error);
    throw 'La ruta del archivo indicada no existe'
  }
  data = render(data, json)
  return data
}



exports.modules = { executeSet, executeGet }