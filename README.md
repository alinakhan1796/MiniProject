# 💻 FreeLance Platform

FreeLance is a platform where users can post gigs, hire freelancers, and manage orders efficiently.

## ✨ Features

- 📝 Create and manage user accounts
- 💼 Post and browse gigs
- 📦 Place and fulfill orders
- 📊 View reports and analytics

## 🛠️ Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js**
- **npm**
- **MySQL**

## ⚙️ Database Setup

Create the database and tables using the following SQL commands:
```sql
CREATE DATABASE FreeLance;
USE FreeLance;
CREATE TABLE Users (
  UserID INT PRIMARY KEY AUTO_INCREMENT,
  UserName VARCHAR(100),
  Email VARCHAR(100),
  Password VARCHAR(100)
);

CREATE TABLE Gig (
  GigID INT PRIMARY KEY AUTO_INCREMENT,
  Title VARCHAR(255),
  Description TEXT,
  Price DECIMAL(10,2),
  UserID INT,
  CategoryID INT
);

CREATE TABLE Orders (
  OrderID INT PRIMARY KEY AUTO_INCREMENT,
  OrderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
  OrderedBy INT,
  FulfilledBy INT
);
``` 

### ▶️ Running the Application
Backend
  Start the server:
  cd backend
  npm install
  node server.js
  Server runs on: http://localhost:5000

Frontend
Open the dashboard in your browser:
frontend/index.html
### 🧱 Tech Stack
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MySQL

### Demo video
Check out our demo video to see freelance website in action:

[Freelance Demonstration](https://collection.cloudinary.com/dldyzunbj/0d128e4ab53908387d122e2dda370df6)
### Authors
Alina Khan | @AlinaKhan

🍴 How to Contribute
Fork this repository.
Clone your fork:

git clone https://github.com/alinakhan1796/FreeLance.git
Make changes and test thoroughly.
Submit a pull request with a description of your changes.

### 📚 References
Node.js Documentation
Express.js Documentation
MySQL Documentation

### Feedback
For any feedback or suggestions, reach out at alinakhan1796@gmail.com