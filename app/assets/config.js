const __path = require('path')

const config = {
    databaseCredencials: {
        user: 'sa',
        password: 'admin123',
        server: 'localhost',
        database: 'pruebas_serem',
        "options": {
            "encrypt": true,
            "enableArithAbort": true
        }

    },

    sqlRoutes: {
        rootDatabase:'/database',
        mainProducts: '/products',
        mainCategories: '/categories',
        mainSuppliers: '/suppliers',
        getProductsId: '/get-products-id.sql',
        getProductsSearch: '/get-products-search.sql',
        getProducts: '/get-products.sql',
        postProducts: '/post-products.sql',
        putProducts: '/put-products.sql',
        getCategories: '/get-categories.sql',
        getSuppliersId: '/get-suppliers-id.sql',
        getSuppliersProducts: '/get-suppliers-products.sql',
        deleteSupplier: '/delete-suppliers.sql'
    }
}

exports.modules = { config }