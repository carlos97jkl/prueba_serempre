SELECT
cat.*, 
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
INNER JOIN Categories cat ON cat.CategoryID = pd.CategoryID
INNER JOIN Suppliers sp  ON sp.SupplierID = pd.SupplierID
{{#allProducts}}
    {{#desc}}
        order by id desc
    {{/desc}}
    {{^desc}}
        order by  id asc
    {{/desc}}
    OFFSET ({{page}}-1)*{{rows}} ROWS
    FETCH NEXT {{rows}} ROWS ONLY
{{/allProducts}}
{{#where}}
    where  {{{whereQuery}}}
{{/where}}

{{#id}}
    where ProductID  = {{id}}
{{/id}}





