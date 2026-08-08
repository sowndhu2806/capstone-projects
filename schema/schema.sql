CREATE DATABASE ProductWarrantyDB;
USE ProductWarrantyDB;

-- Admin Table
CREATE TABLE Admin (
    admin_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

-- User Table
CREATE TABLE User (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15),
    address VARCHAR(255)
);

-- Product Table
CREATE TABLE Product (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    brand VARCHAR(100),
    model_number VARCHAR(100),
    serial_number VARCHAR(100) UNIQUE NOT NULL,
    purchase_date DATE,
    warranty_start_date DATE,
    warranty_end_date DATE,
    warranty_status VARCHAR(30),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

-- Bill Table
CREATE TABLE Bill (
    bill_id INT PRIMARY KEY AUTO_INCREMENT,
    invoice_number VARCHAR(100) UNIQUE NOT NULL,
    bill_image VARCHAR(255),
    upload_date DATE,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
);

-- Warranty Claim Table
CREATE TABLE WarrantyClaim (
    claim_id INT PRIMARY KEY AUTO_INCREMENT,
    claim_reason TEXT,
    claim_date DATE,
    claim_status VARCHAR(30),
    admin_remark TEXT,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
);

USE ProductWarrantyDB;

-- Admin
INSERT INTO Admin (username, email, password) VALUES
('admin01', 'admin01@gmail.com', 'admin123'),
('admin02', 'admin02@gmail.com', 'admin456');

-- Users
INSERT INTO Users (full_name, email, password, phone_number, address) VALUES
('Arun Kumar', 'arun@gmail.com', 'arun123', '9876543210', 'Chennai'),
('Priya S', 'priya@gmail.com', 'priya123', '9876543211', 'Trichy'),
('Karthik R', 'karthik@gmail.com', 'karthik123', '9876543212', 'Madurai'),
('Divya M', 'divya@gmail.com', 'divya123', '9876543213', 'Coimbatore');

-- Product
INSERT INTO Product
(product_name, brand, model_number, serial_number, purchase_date,
 warranty_start_date, warranty_end_date, warranty_status, user_id)
VALUES
('Laptop', 'Dell', 'Inspiron 15', 'DL10001', '2026-01-10',
 '2026-01-10', '2027-01-10', 'Active', 1),

('Smartphone', 'Samsung', 'Galaxy A55', 'SM10002', '2026-02-15',
 '2026-02-15', '2027-02-15', 'Active', 2),

('Television', 'LG', 'OLED55C4', 'LG10003', '2025-06-20',
 '2025-06-20', '2026-06-20', 'Expired', 3),

('Refrigerator', 'Whirlpool', 'IF305ELT', 'WP10004', '2026-03-05',
 '2026-03-05', '2027-03-05', 'Active', 4);

-- Bill
INSERT INTO Bill
(invoice_number, bill_image, upload_date, product_id)
VALUES
('INV1001', 'bill_laptop.jpg', '2026-01-10', 1),
('INV1002', 'bill_mobile.jpg', '2026-02-15', 2),
('INV1003', 'bill_tv.jpg', '2025-06-20', 3),
('INV1004', 'bill_fridge.jpg', '2026-03-05', 4);

-- Warranty Claim
INSERT INTO WarrantyClaim
(claim_reason, claim_date, claim_status, admin_remark, product_id)
VALUES
('Laptop screen not working', '2026-04-10', 'Pending',
 'Under verification', 1),

('Mobile charging problem', '2026-04-15', 'Approved',
 'Service approved', 2),

('TV display issue', '2026-05-01', 'Rejected',
 'Warranty expired', 3),

('Refrigerator cooling problem', '2026-05-10', 'Pending',
 'Technician assigned', 4);

 SELECT * FROM Admin;
SELECT * FROM Users;
SELECT * FROM Product;
SELECT * FROM Bill;
SELECT * FROM WarrantyClaim;