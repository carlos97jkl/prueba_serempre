const products = (items) => {
  const itemsFormated = items.map(item => {
    return {
      category: {
        description: item.description,
        id: item.CategoryID,
        name: item.CategoryName,
        picture: item.Picture
      },

      discontinued: item.Discontinued == 1 ? true : false,
      id: item.id,
      productName: item.ProductName,
      quantityPerUnit: item.QuantityPerUnit,
      reorderLevel: item.ReorderLevel,
      supplier: {
        address: {
          city: item.City,
          country: item.Country,
          phone: item.Phone,
          postalCode: item.PostalCode,
          region: item.Region,
          street: item.Address
        },
        companyName: item.CompanyName,
        contactName: item.ContactName,
        contactTitle: item.ContactTitle,
        id: item.SupplierID
      },
      unitPrice: item.UnitPrice,
      unitsInStock: item.UnitsInStock,
      unitsOnOrder: item.UnitsOnOrder
    }
  }
  )
  return itemsFormated
}
module.exports = { products }