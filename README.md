# 💼 Freelance Platform Dashboard

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

🧠 **Freelance Platform Dashboard**  
A full-stack freelance management system that allows users to manage freelancers, gigs, and orders with real-time data visualization and analytics.

---

## ✨ Features

👥 Manage **Users** — Add / View / Edit / Delete  
💼 Manage **Gigs** — Add / View / Edit / Delete  
📦 Manage **Orders** — Add / View / Edit / Delete  
📊 **Reports & Analytics** — View top freelancers and total revenue  
🎨 Clean, card-based **Dashboard UI** with responsive design

---

## 🛠️ Prerequisites

Before running the application, ensure the following are installed:

- **Node.js** (v16 or newer)  
- **MySQL Server**  
- **Web Browser (Chrome / Edge)**

---

## ⚙️ Setup

### Backend Setup
```bash
cd backend
npm install
node server.js
### Database Configuration
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

▶️ Running the Application
Start the Server
node server.js
Server runs on: http://localhost:5000

Launch Frontend
Open:
frontend/index.html
in your browser to access the dashboard.

🧱 Tech Stack
Component	Technology
Frontend	HTML, CSS, JavaScript
Backend	Node.js, Express.js
Database	MySQL

🧩 Project Structure
freelance-platform/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .gitignore
│
└── frontend/
    ├── index.html
    ├── users.html
    ├── gigs.html
    ├── orders.html
    ├── reports.html
    └── style.css

👨‍💻 Author
AlinaKhan
