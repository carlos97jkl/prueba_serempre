const sql = require('mssql')
const fs = require('fs')
const path = require('path')
const { render } = require('mustache')
const { config } = require('../assets/config').modules

const connection = async () => {
  try {
    let pool = await sql.connect(config.databaseCredencials
    )
    return pool
  } catch (error) {
    throw 'No se ha podido realizar la conexión a la base de datos'
  }
}

const executeSet = (rootDir, nameFile, data, query, options) => {

  return executeQuery(rootDir, nameFile, data, query, options)

}

const executeGet = (rootDir, nameFile, query, options) => {
  let data = {}
  return executeQuery(rootDir, nameFile, data, query, options)

}
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

const  sendQuery =  async (pool, sqlQuery) => {
    try {
      return await pool.request().query(sqlQuery)
    } catch (error) {
       throw  'Se genero un error ejecutando la consulta, por favor revise los datos enviado e intentelo de nuevo'
    }
}

const getWhere = (query) => {
  const keysQuery = Object.keys(query)
  let arrayQuery = keysQuery.map(element => {
    return ` ${element} = '${query[element]}'`
  })
  return arrayQuery.join(' and ')

}

const renderSql = (rootDir, nameFile, query = {}) => {
  var data = ''
  try {
    let route = path.join(__dirname, `../${config.sqlRoutes.rootDatabase}${rootDir}${nameFile}`)
    data = fs.readFileSync(route, 'utf8')
  } catch (error) {
    console.log(error);
    throw 'La ruta del archivo indicada no existe'
  }
  data = render(data, query)
  return data
}



exports.modules = { executeSet, executeGet }