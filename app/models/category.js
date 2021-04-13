const category = (items) => {
  const itemsFormated = items.map(item => {
    let category = {
      description: item.description,
      name: item.CategoryName,
      picture: item.Picture,
      id: item.CategoryID
    }
    category.products = eval(item.products)
    category.products = category.products.map(product => ({
      discontinued: product.Discontinued == 1 ? true : false,
      id: product.id,
      productName: product.ProductName,
      quantityPerUnit: product.QuantityPerUnit,
      reorderLevel: product.ReorderLevel,
      supplier: {
        address: {
          city: product.City,
          country: product.Country,
          phone: product.Phone,
          postalCode: product.PostalCode,
          region: product.Region,
          street: product.Address
        },
        companyName: product.CompanyName,
        contactName: product.ContactName,
        contactTitle: product.ContactTitle,
        id: product.SupplierID
      },
      unitPrice: product.UnitPrice,
      unitsInStock: product.UnitsInStock,
      unitsOnOrder: product.UnitsOnOrder
    }))




    return category

  }
  )
  return itemsFormated
}
module.exports = { category }