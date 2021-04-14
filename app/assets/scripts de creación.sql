CREATE TABLE Suppliers(
	SupplierID int NOT NULL,
	CompanyName nvarchar(40) NULL,
	ContactName nvarchar(30) NULL,
	ContactTitle nvarchar(30) NULL,
	Address nvarchar(60) NULL,
	City nvarchar(15) NULL,
	Region nvarchar(15) NULL,
	PostalCode nvarchar(10) NULL,
	Country nvarchar(15) NULL,
	Phone nvarchar(24) NULL,
	Fax nvarchar(24) NULL,
	HomePage varchar(max) NULL,
PRIMARY KEY 
(
	SupplierID ASC
))



CREATE TABLE Categories(
	CategoryID int NOT NULL,
	CategoryName nvarchar(15) NULL,
	description varchar(max) NULL,
	Picture nvarchar(max) NULL,
PRIMARY KEY CLUSTERED 
(
	CategoryID ASC
)) 


CREATE TABLE Products(
	ProductName nvarchar(40) NULL,
	SupplierID int NULL,
	CategoryID int NULL,
	QuantityPerUnit nvarchar(20) NULL,
	UnitPrice decimal(15, 4) NULL,
	UnitsInStock smallint NULL,
	UnitsOnOrder smallint NULL,
	ReorderLevel smallint NULL,
	Discontinued bit NULL,
	ProductID int IDENTITY(1,1) NOT NULL,
	PRIMARY KEY (ProductID), 
    FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID) on update cascade  on delete set null,
	FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID) on update cascade  on delete set null
)


CREATE TABLE Region(
	RegionID int NOT NULL,
	RegionDescription nchar(50) NULL,
PRIMARY KEY CLUSTERED 
(
	RegionID ASC
)) 

CREATE TABLE Territories(
	TerritoryID nvarchar(20) NOT NULL,
	TerritoryDescription nchar(50) NULL,
	RegionID int NULL,
	PRIMARY KEY(TerritoryID ASC),
	FOREIGN KEY (RegionID) REFERENCES Region(RegionID) on update cascade  on delete set null
	) 



CREATE TABLE Employees(
	EmployeeID int NOT NULL,
	LastName nvarchar(20) NULL,
	FirstName nvarchar(10) NULL,
	Title nvarchar(30) NULL,
	TitleOfCourtesy nvarchar(25) NULL,
	BirthDate datetime NULL,
	HireDate datetime NULL,
	Address nvarchar(60) NULL,
	City nvarchar(15) NULL,
	Region nvarchar(15) NULL,
	PostalCode nvarchar(10) NULL,
	Country nvarchar(15) NULL,
	HomePhone nvarchar(24) NULL,
	Extension nvarchar(4) NULL,
	Photo image NULL,
	ReportsTo int NULL,
	PhotoPath nvarchar(255) NULL,
	Notes varchar(max) NULL,
	PRIMARY KEY CLUSTERED (EmployeeID ASC), 
	FOREIGN KEY (ReportsTo) REFERENCES Employees(EmployeeID) 
)



CREATE TABLE EmployeeTerriories (
	 EmployeeID  int,
	 TerritoryID  nvarchar(20),
	 PRIMARY KEY (EmployeeID,TerritoryID ), 
	 FOREIGN KEY (EmployeeID)  REFERENCES  Employees(EmployeeID) on update cascade  on delete cascade,
	 FOREIGN KEY (TerritoryID)  REFERENCES  Territories(TerritoryID) on update cascade  on delete cascade
)



CREATE TABLE CustomerDemographics(
	CustomerTypeID nchar(10) NOT NULL,
	CustomerDesc nvarchar (max) NULL,
PRIMARY KEY CLUSTERED 
(
	CustomerTypeID ASC
)) 



CREATE TABLE Customers(
	CustomerID nchar(5) NOT NULL,
	CompanyName nvarchar(40) NULL,
	ContactName nvarchar(30) NULL,
	ContactTitle nvarchar(30) NULL,
	Address nvarchar(60) NULL,
	City nvarchar(15) NULL,
	Region nvarchar(15) NULL,
	PostalCode nvarchar(10) NULL,
	Country nvarchar(15) NULL,
	Phone nvarchar(24) NULL,
	Fax nvarchar(24) NULL,
PRIMARY KEY CLUSTERED 
(
	CustomerID ASC
)) 

CREATE TABLE CustomerCustomerDemo(
	CustomerID nchar(5), 
	CustomerTypeID nchar(10), 
	PRIMARY KEY (CustomerID,CustomerTypeID),
	FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID) on update cascade  on delete cascade,
	FOREIGN KEY (CustomerTypeID) REFERENCES CustomerDemographics(CustomerTypeID) on update cascade  on delete cascade
)



CREATE TABLE Orders (
	OrderID int, 
	CustomerID nchar(5), 
	EmployeeID int, 
	OrderDate datetime,  
	RequiredDate datetime,  
	ShippedDate datetime,
	ShipVia  int, 
	Freight decimal (15,4), 
	ShipName  nvarchar(40), 
	ShipAddress nvarchar(60), 
	ShipCity nvarchar(15), 
	ShipRegion  nvarchar(15), 
	ShipPostalCode  nvarchar(10), 
	ShipCountry  nvarchar(15),
	PRIMARY  KEY (OrderID),
	FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID) on update cascade  on delete set null,
	FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID) on update cascade  on delete set null,
	FOREIGN KEY (OrderID) REFERENCES OrderDetails(OrderID) on update cascade  on delete set null,
    FOREIGN KEY (ShipVia) REFERENCES Shippers(ShipperID) on update cascade  on delete set null,
);



CREATE TABLE Shippers(
	ShipperID int NOT NULL,
	CompanyName nvarchar(40) NULL,
	Phone nvarchar(24) NULL,
    PRIMARY KEY(ShipperID ASC)) 

CREATE TABLE OrderDetails (
	OrderID int,
	ProductID int,
	UnitPrice decimal(15,4), 
	Quantity smallint,
	Discount real,
	PRIMARY KEY (OrderID,ProductID) , 
	FOREIGN KEY (OrderID) REFERENCES Orders(OrderID) on update cascade on delete cascade ,
	FOREIGN KEY (ProductID) REFERENCES Products(ProductID) on update cascade  on delete cascade,
)

