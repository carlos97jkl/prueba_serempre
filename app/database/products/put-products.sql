UPDATE Products SET
{{#categoryID}}
    CategoryID = {{categoryID}},  
{{/categoryID}}

{{#discontinued}}
    Discontinued = {{discontinued}}, 
{{/discontinued}}

{{#productName}}
    ProductName = '{{{productName}}}',  
{{/productName}}

{{#quantityPerUnit}}
    QuantityPerUnit = '{{{quantityPerUnit}}}',  
{{/quantityPerUnit}}

{{#reorderLevel}}
    reorderLevel = {{reorderLevel}},  
{{/reorderLevel}}

{{#supplierID}}
    SupplierID = {{supplierID}},  
{{/supplierID}}

{{#unitPrice}}
    UnitPrice = {{unitPrice}},  
{{/unitPrice}}

{{#unitsInStock}}
    UnitsInStock = {{unitsInStock}},  
{{/unitsInStock}}

{{{#unitsOnOrder}}}
    UnitsOnOrder = {{unitsOnOrder}}
{{{/unitsOnOrder}}}

where  ProductID = {{{id}}}