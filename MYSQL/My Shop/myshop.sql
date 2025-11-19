-- jawaban no 1
-- buat data base
CREATE DATABASE myshop;
use myshop;

-- jawaban no 2
-- buat tabel users
CREATE TABLE users (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
    );
    
-- buat tabel categories
CREATE TABLE categories (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
    );

-- buat tabel items
CREATE TABLE items (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL (15,2),
    stock INT,
    category_id INT,
    user_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
    );

-- jawaban no 3
-- insert data users
INSERT into users values
	 ('1', 'John Doe','john@doe.com','john123'),
	 ('2', 'Jane Doe','jane@doe.com','jane123'),
	 ('3', 'Alice','alice@example.com','alicepwd'),
	 ('4', 'Bob','bob@example.com','bobpws');
    
-- insert data categories
INSERT into categories values
	('1', 'gadget'),
	('2', 'cloth'),
	('3', 'men'),
	('4', 'women'),
	('5', 'branded'),
	('6', 'electronics'),
	('7', 'fashion');

-- insert data items
INSERT into items values
	('1', 'Sumsang b50', 'hape keren dari merek sumsang',4000000,'100', '1','1'),
	('2', 'Unikloh', 'bju keren dari brand ternama',500000,'50', '2','2'),
	('3', 'IMHO Watch', 'jam tangan anak yang jujur banget',2000000,'10', '1','1'),
	('4', 'Nike Shoes', 'sepatu olahraga nyaman dan stylish',1500000,'70', '5','3'),
	('5', 'Apple Iphone', 'smartphone canggih dan populer',12000000,'30', '6','4'),
	('6', 'Leather Jacket', 'jaket kulit untuk pria',2500000,'15', '7','3');

-- jawaban no.4
SELECT id, name, email
FROM users;

-- jawaban no.5
SELECT * FROM items
WHERE price > 1000000;

-- jawaban no.6
SELECT *
FROM items
WHERE name LIKE '%uniklo%'
	OR name LIKE '%sang%'
    OR name LIKE '%watch%';

-- jawaban no.7
UPDATE items
SET price = 2500000
WHERE name = 'susmsang b50';

-- jawaban no.8
SELECT c.name AS "category_name", COUNT(i.id) AS "total_items"
FROM categories c
JOIN items i ON c.id = i.category_id
GROUP BY c.id, c.name
HAVING COUNT(i.id) > 1;

-- jawaban no.9
SELECT u.name AS "Owner Name",
ROUND(AVG(i.price), 0) AS "AVG Price"
FROM users u
JOIN items i ON U.ID = i.user_id
GROUP BY u.id, u.name;

-- jawaban no.10
SELECT
i.name AS  "Item Name",
c.name AS  "Category Name",
u.name AS  "Owner Name"
FROM items i
JOIN categories c ON i.category_id = c.id
JOIN users u ON i.user_id = u.id
WHERE i.stock < 20;

-- jawaban no.11
SELECT 
	u.name AS "User Name",
	i.name AS "Item Name",
	i.stock AS "Stock"
FROM items i
JOIN users u ON i.user_id = u.id
WHERE i.stock > 50;

-- jawaban no.12
SELECT
	u.name AS "Owner Name",
    i.name AS "Item Name",
    i.price AS "Price"
FROM items i
JOIN users u ON i.user_id = u.id
ORDER BY i.price DESC 
LIMIT 1;

-- jawaban no.13
SELECT
	u.name AS "Owner Name",
    SUM(i.price * i.stock) AS "TOtal value"
FROM users u
JOIN items i ON u.id = i.user_id
GROUP BY u.id, u.name
ORDER BY SUM(i.price) DESC;

 -- jawaban no.14 &  15
CREATE VIEW view_item_details AS 
SELECT
	i.id AS "ID",
    i.name AS "Product Name",
    i.description AS "Description",
    i.price AS "Price",
    i.stock AS "Stock",
    c.name AS "Category Name",
    u.name AS "Owner Name",
    u.email AS "Owner Email"
FROM items i
LEFT JOIN categories c ON i.category_id = c.id
LEFT JOIN users u ON i.user_id = u.id;

-- jawaban no.16
SELECT 
    u.name AS "Owner Name",
    SUM(i.stock) AS "Total Stock"
FROM users u
JOIN items i ON u.id = i.user_id
GROUP BY u.id, u.name
ORDER BY SUM(i.stock) DESC;

-- jawaban no.17
SELECT 
	`Product Name`,
    `Category Name`,
    `Owner Email`
FROM view_item_details
WHERE price > 1000000;

-- jawaban no.18
CREATE VIEW view_owner_stock AS
SELECT 
    u.name AS "Owner Name",
    SUM(i.stock) AS "Total Stock"
FROM users u
JOIN items i ON u.id = i.user_id
GROUP BY u.id, u.name
ORDER BY `Total Stock` DESC;

--  jawaban no 19
DROP VIEW IF EXISTS view_owner_stock;
    
    
    
    
    
    
    
    








    
    
    
    
    
    



