Problem Statement

1. Title
Smart Warranty Portal
2. Domain
Product Warranty Management
3. Who is the User?
User / Customer
Register an account
Login to the portal
Register products
View warranty details
Track warranty status
4. What Problem Are We Solving?
Users often store product warranty information in paper bills, receipts, or manual records. This makes it difficult to keep track of warranty details and remember warranty expiry dates. Users may also miss the warranty period of their registered products.
The Smart Warranty Portal solves this problem by providing a digital platform to register products, store warranty information, track warranty status, and receive alerts for expired or soon-to-expire warranties.
5. Proposed Solution
A web-based Smart Warranty Portal that allows users to create an account, login, register their products, store warranty details, view registered products, and automatically track warranty status.
The system provides a dashboard showing product and warranty information. It automatically identifies active, expiring soon, and expired warranties and displays appropriate warranty alerts.
6. Core Entities / Database Tables
User
Product
Warranty

User:
Stores user registration and login information.
Product:
Stores product name, brand name, serial number, warranty start date, and warranty end date.
Warranty:
Represents the warranty information and status of registered products.
7. User Roles
User / Customer
Register and login
Register products
View product details
View warranty details
Track warranty status
Check warranty expiry alerts
8. Success Criteria
Easy user registration and login
Successful product registration
Accurate storage of product and warranty information
Easy access to warranty details
Automatic warranty status tracking
Correct identification of active warranties
Correct identification of expired warranties
Identification of warranties expiring within 30 days
Automatic warranty alerts
Dashboard displaying product and warranty statistics
9. Out of Scope
Online payment
Product sales
Physical product repair
Service request management
SMS OTP verification
Online purchasing
Product delivery management
10. Chosen Technology Stack
Frontend:
React.js
Vite
JavaScript
HTML
CSS
Backend:
Java
Spring Boot
REST API
Database:
MySQL
MySQL Workbench
ORM:
Spring Data JPA
Hibernate
Development Tool:
Visual Studio Code
Version Control:
Git
GitHub
Cloud Deployment:
Railway