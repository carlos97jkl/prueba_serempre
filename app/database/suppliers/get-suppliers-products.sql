select * , (select *, (select CategoryName from Categories cat where cat.CategoryID = pd.CategoryID) as CategoryName from Products pd where  sp.SupplierID = pd.SupplierID  for json path ) as products
from Suppliers sp
where supplierID = {{id}}