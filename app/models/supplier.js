const suppliers = (items) => {
  const itemsFormated = items.map(item => {
    let supplier = {
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

    }
    if (item.products) {
      supplier.products = eval(item.products)
      supplier.products = supplier.products.map(product => ({
        categoryID: product.CategoryID,
        categoryName: product.CategoryName,
        id: product.ProductID,
        productName: product.ProductName,
      }))
    }
    return supplier

  }
  )
  return itemsFormated
}
module.exports = { suppliers }