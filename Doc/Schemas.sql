CREATE DATABASE warranty_portal;
USE warranty_portal;
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100),
    phone VARCHAR(15)
);
CREATE TABLE brands (
    brand_id INT PRIMARY KEY AUTO_INCREMENT,
    brand_name VARCHAR(100)
);
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    brand_id INT,
    product_name VARCHAR(100),
    model VARCHAR(100),
    serial_number VARCHAR(100) UNIQUE,
    purchase_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (brand_id) REFERENCES brands(brand_id)
);
CREATE TABLE warranties (
    warranty_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    warranty_start DATE,
    warranty_end DATE,
    warranty_status VARCHAR(20),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
CREATE TABLE service_requests (
    request_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    issue_description VARCHAR(255),
    request_date DATE,
    status VARCHAR(30),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

