DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("T-Shirt", "Clothing", 15, 110),
           ("Underwear", "Clothing", 10, 70),
           ("Apples", "Produce", 5, 25),
           ("Table Saw", "Tools", 350, 6),
           ("iPhone", "Electronics", 999, 350),
           ("Oven", "Electronics", 20, 550),
           ("Light Bulb", "Lighting", 30, 134),
           ("Quava", "Produce", 7, 9),
           ("Granite Counter Top", "Home", 450, 11),
           ("Amazon Echo Dot", "Electronics", 80, 48);

SELECT * FROM products;