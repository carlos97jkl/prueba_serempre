 select *, (   
    SELECT
    Discontinued,
    ProductID as id,
    ProductName,
    QuantityPerUnit,
    ReorderLevel,
    sp.*, 
    UnitPrice,
    UnitsInStock,
    UnitsOnOrder
    FROM Products pd
    INNER JOIN Suppliers sp  ON sp.SupplierID = pd.SupplierID   where  sp.SupplierID = pd.SupplierID  
    order by  id asc
    OFFSET ({{page}}-1)*{{rows}} ROWS
    FETCH NEXT {{rows}} ROWS ONLY
    for json path
     ) as products 
    
 from Categories
 where  CategoryID = {{id}}