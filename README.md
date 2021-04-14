# prueba_serempre

A continuación se hace una descripción general de la estructura, requisitos y ejecución del proyecto


## Estructura
### Assets
En esta carpeta encontraremos todos los archivos relacionados con las configuraciones que se necesitan para las ejecución de la aplicación
### Controllers
Carpeta en la cual se encuentran todos los controladores que de los endpoints
### Database
Aqui se encuentran todas las consultas para que se van a ejecutar en la base de datos para la  creación y modificación de los datos
### Models
En esta carpeta de encuentran todos los mapeos de los datos para las respuestas de las peticiones
### routes
Rutas de los diferentes endpoints
### Services
Aqui se encuentran los metodos necesarios para conexión y ejecución de las consultas a la base de datos


## Endpoints
### Productos
#### api/products?
   - Recibe como query:
       - order: Los valores para predefinidos para estos son desc y asc, si no se envia ninguno por defecto sera desc
       - page: Recibe valores numericos para el valor de la pagina, el valor por defecto es 1
       - rows:  Recibe valores numericos para el numero de productos que se van a traer en la pagina, el valor por defecto es 10
 #### api/products/search?
   - Recibe como query:
      - productName: Busqueda de productos a traves del nombre del producto
      - categoryName: Busqueda por nombre de categoria
      - supplierName: Busqueda a traves de nombre de proveedor
 #### api/products/:id
   - Recibe como parametros
     - id: Id del producto
 #### api/products
   - Permite crear un nueo producto
 #### api/products/:id
   - Recibe como parametros
     - id: Id del producto a modificar
 ### Categorias
 #### api/categories/:id/products
   - Recibe como parametro:
     - id:  id del producto a buscar
 ### Proveedores
 #### api/suppliers/:id
   -  Recibe como parametro:
     - id: id del proveedor
 #### api/suppliers/:id/products
   -  Recibe como parametro:
     - id: id del proveedor
 #### api/suppliers/:id
   -  Recibe como parametro:
     - id: id del proveedor
 
## Dependencias
- SQl Server 2019
- ExpressJs
- NodeJs
- mustacheJs
