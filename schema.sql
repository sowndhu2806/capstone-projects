CREATE DATABASE warranty_portal;
USE warranty_portal;

-- 1. Admin Table
CREATE TABLE Admin (
    admin_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);

-- 2. User Table
CREATE TABLE User (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    phone_number VARCHAR(15),
    address VARCHAR(255)
);

-- 3. Product Table
CREATE TABLE Product (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100),
    brand VARCHAR(100),
    model_number VARCHAR(100),
    serial_number VARCHAR(100),
    purchase_date DATE,
    warranty_start_date DATE,
    warranty_end_date DATE,
    warranty_status VARCHAR(50),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

-- 4. Bill Table
CREATE TABLE Bill (
    bill_id INT PRIMARY KEY AUTO_INCREMENT,
    invoice_number VARCHAR(100),
    bill_image VARCHAR(255),
    upload_date DATE,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
);

-- 5. WarrantyClaim Table
CREATE TABLE WarrantyClaim (
    claim_id INT PRIMARY KEY AUTO_INCREMENT,
    claim_reason TEXT,
    claim_date DATE,
    claim_status VARCHAR(50),
    admin_remark TEXT,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
);

USE warranty_portal;

-- 1. Admin values
INSERT INTO Admin (username, email, password)
VALUES
('admin01', 'admin01@gmail.com', 'admin123'),
('admin02', 'admin02@gmail.com', 'admin456');


-- 2. User values
INSERT INTO User (full_name, email, password, phone_number, address)
VALUES
('Arun Kumar', 'arun@gmail.com', 'arun123', '9876543210', 'Trichy'),
('Priya S', 'priya@gmail.com', 'priya123', '9876543211', 'Chennai'),
('Kavin Raj', 'kavin@gmail.com', 'kavin123', '9876543212', 'Coimbatore');


-- 3. Product values
INSERT INTO Product
(product_name, brand, model_number, serial_number, purchase_date,
 warranty_start_date, warranty_end_date, warranty_status, user_id)
VALUES
('Laptop', 'Dell', 'Inspiron 15', 'DL10001',
 '2025-01-10', '2025-01-10', '2028-01-10', 'Active', 1),

('Smartphone', 'Samsung', 'Galaxy A55', 'SM20001',
 '2025-03-15', '2025-03-15', '2027-03-15', 'Active', 2),

('Washing Machine', 'LG', 'LG7KG01', 'LG30001',
 '2024-08-20', '2024-08-20', '2026-08-20', 'Active', 3);


-- 4. Bill values
INSERT INTO Bill
(invoice_number, bill_image, upload_date, product_id)
VALUES
('INV1001', 'dell_bill.jpg', '2025-01-11', 1),
('INV1002', 'samsung_bill.jpg', '2025-03-16', 2),
('INV1003', 'lg_bill.jpg', '2024-08-21', 3);


-- 5. WarrantyClaim values
INSERT INTO WarrantyClaim
(claim_reason, claim_date, claim_status, admin_remark, product_id)
VALUES
('Laptop battery problem', '2026-07-10', 'Pending',
 'Claim received and under review', 1),

('Display issue', '2026-07-15', 'Approved',
 'Product eligible for warranty service', 2),

('Water leakage problem', '2026-07-20', 'Pending',
 'Inspection required', 3);
 
 SELECT * FROM Admin;
SELECT * FROM User;
SELECT * FROM Product;
SELECT * FROM Bill;
SELECT * FROM WarrantyClaim;