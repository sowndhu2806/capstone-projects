CREATE DATABASE smart_warranty_portal;

USE smart_warranty_portal;

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

SHOW TABLES;

USE smart_warranty_portal;

-- Users Table
INSERT INTO users (name, email, password, phone)
VALUES
('Sowndharya', 'sowndharya@gmail.com', 'Project@2026', '9876543210'),
('Rahul', 'rahul@gmail.com', 'Rahul@123', '9876501234');

-- Brands Table
INSERT INTO brands (brand_name)
VALUES
('Samsung'),
('Apple'),
('HP'),
('Dell'),
('Lenovo');

-- Products Table
INSERT INTO products (user_id, brand_id, product_name, model, serial_number, purchase_date)
VALUES
(1, 5, 'Laptop', 'IdeaPad Slim 3', 'LEN123456', '2025-01-15'),
(2, 1, 'Smartphone', 'Galaxy S24', 'SAM987654', '2025-03-20');

-- Warranties Table
INSERT INTO warranties (product_id, warranty_start, warranty_end, warranty_status)
VALUES
(1, '2025-01-15', '2027-01-15', 'Active'),
(2, '2025-03-20', '2026-03-20', 'Active');

-- Service Requests Table
INSERT INTO service_requests (product_id, issue_description, request_date, status)
VALUES
(1, 'Battery drains quickly', '2025-08-01', 'Pending'),
(2, 'Screen flickering issue', '2025-08-03', 'In Progress');
