const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "afaaf5518",
  database: "freelance_schema"
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

// -------------------- USERS --------------------
app.get("/users", (req, res) => {
  db.query("SELECT UserID, UserName, Email FROM Users", (err, results) => {
    if (err) return res.json({ error: err });
    res.json(results);
  });
});

app.post("/users", (req, res) => {
  const { UserName, Email, Password } = req.body;
  db.query(
    "INSERT INTO Users (UserName, Email, Password) VALUES (?, ?, ?)",
    [UserName, Email, Password],
    (err) => {
      if (err) return res.json({ error: err });
      res.json({ message: "User added successfully" });
    }
  );
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { UserName, Email, Password } = req.body;
  db.query(
    "UPDATE Users SET UserName=?, Email=?, Password=? WHERE UserID=?",
    [UserName, Email, Password, id],
    (err) => {
      if (err) return res.json({ error: err });
      res.json({ message: "User updated successfully" });
    }
  );
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM Users WHERE UserID=?", [id], (err) => {
    if (err) return res.json({ error: err });
    res.json({ message: "User deleted successfully" });
  });
});

// -------------------- GIGS --------------------
app.get("/gigs", (req, res) => {
  db.query("SELECT * FROM Gig", (err, results) => {
    if (err) return res.json({ error: err });
    res.json(results);
  });
});

app.post("/gigs", (req, res) => {
  const { Title, Description, Price, UserID, CategoryID } = req.body;
  db.query(
    "INSERT INTO Gig (Title, Description, Price, UserID, CategoryID) VALUES (?, ?, ?, ?, ?)",
    [Title, Description, Price, UserID, CategoryID],
    (err) => {
      if (err) return res.json({ error: err });
      res.json({ message: "Gig added successfully" });
    }
  );
});

app.put("/gigs/:id", (req, res) => {
  const { id } = req.params;
  const { Title, Description, Price, UserID, CategoryID } = req.body;
  db.query(
    "UPDATE Gig SET Title=?, Description=?, Price=?, UserID=?, CategoryID=? WHERE GigID=?",
    [Title, Description, Price, UserID, CategoryID, id],
    (err) => {
      if (err) return res.json({ error: err });
      res.json({ message: "Gig updated successfully" });
    }
  );
});

app.delete("/gigs/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM Gig WHERE GigID=?", [id], (err) => {
    if (err) return res.json({ error: err });
    res.json({ message: "Gig deleted successfully" });
  });
});

// -------------------- ORDERS --------------------
app.get("/orders", (req, res) => {
  db.query("SELECT * FROM Orders", (err, results) => {
    if (err) return res.json({ error: err });
    res.json(results);
  });
});

app.post("/orders", (req, res) => {
  const { OrderedBy, FulfilledBy } = req.body;
  db.query(
    "INSERT INTO Orders (OrderDate, OrderedBy, FulfilledBy) VALUES (NOW(), ?, ?)",
    [OrderedBy, FulfilledBy],
    (err) => {
      if (err) return res.json({ error: err });
      res.json({ message: "Order placed successfully" });
    }
  );
});

app.put("/orders/:id", (req, res) => {
  const { id } = req.params;
  const { OrderedBy, FulfilledBy } = req.body;
  db.query(
    "UPDATE Orders SET OrderedBy=?, FulfilledBy=? WHERE OrderID=?",
    [OrderedBy, FulfilledBy, id],
    (err) => {
      if (err) return res.json({ error: err });
      res.json({ message: "Order updated successfully" });
    }
  );
});

app.delete("/orders/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM Orders WHERE OrderID=?", [id], (err) => {
    if (err) return res.json({ error: err });
    res.json({ message: "Order deleted successfully" });
  });
});

// -------------------- REVIEWS --------------------
app.get("/reviews", (req, res) => {
  db.query("SELECT * FROM Review", (err, results) => {
    if (err) return res.json({ error: err });
    res.json(results);
  });
});

app.post("/reviews", (req, res) => {
  const { GivenBy, GivenFor, Rating, Comment } = req.body;
  db.query(
    "INSERT INTO Review (GivenBy, GivenFor, Rating, Comment) VALUES (?, ?, ?, ?)",
    [GivenBy, GivenFor, Rating, Comment],
    (err) => {
      if (err) return res.json({ error: err });
      res.json({ message: "Review added successfully" });
    }
  );
});

app.put("/reviews/:id", (req, res) => {
  const { id } = req.params;
  const { Rating, Comment } = req.body;
  db.query(
    "UPDATE Review SET Rating=?, Comment=? WHERE ReviewID=?",
    [Rating, Comment, id],
    (err) => {
      if (err) return res.json({ error: err });
      res.json({ message: "Review updated successfully" });
    }
  );
});

app.delete("/reviews/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM Review WHERE ReviewID=?", [id], (err) => {
    if (err) return res.json({ error: err });
    res.json({ message: "Review deleted successfully" });
  });
});

// -------------------- CATEGORIES --------------------
app.get("/categories", (req, res) => {
  db.query("SELECT * FROM Category", (err, results) => {
    if (err) return res.json({ error: err });
    res.json(results);
  });
});

app.post("/categories", (req, res) => {
  const { CategoryName } = req.body;
  db.query(
    "INSERT INTO Category (CategoryName) VALUES (?)",
    [CategoryName],
    (err) => {
      if (err) return res.json({ error: err });
      res.json({ message: "Category added successfully" });
    }
  );
});

app.put("/categories/:id", (req, res) => {
  const { id } = req.params;
  const { CategoryName } = req.body;
  db.query(
    "UPDATE Category SET CategoryName=? WHERE CategoryID=?",
    [CategoryName, id],
    (err) => {
      if (err) return res.json({ error: err });
      res.json({ message: "Category updated successfully" });
    }
  );
});

app.delete("/categories/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM Category WHERE CategoryID=?", [id], (err) => {
    if (err) return res.json({ error: err });
    res.json({ message: "Category deleted successfully" });
  });
});

// -------------------- PAYMENTS --------------------
app.get("/payments", (req, res) => {
  db.query("SELECT * FROM Payment", (err, results) => {
    if (err) return res.json({ error: err });
    res.json(results);
  });
});

app.post("/payments", (req, res) => {
  const { OrderID, Amount, PaymentDate } = req.body;
  db.query(
    "INSERT INTO Payment (OrderID, Amount, PaymentDate) VALUES (?, ?, ?)",
    [OrderID, Amount, PaymentDate],
    (err) => {
      if (err) return res.json({ error: err });
      res.json({ message: "Payment added successfully" });
    }
  );
});

app.put("/payments/:id", (req, res) => {
  const { id } = req.params;
  const { Amount, PaymentDate } = req.body;
  db.query(
    "UPDATE Payment SET Amount=?, PaymentDate=? WHERE PaymentID=?",
    [Amount, PaymentDate, id],
    (err) => {
      if (err) return res.json({ error: err });
      res.json({ message: "Payment updated successfully" });
    }
  );
});

app.delete("/payments/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM Payment WHERE PaymentID=?", [id], (err) => {
    if (err) return res.json({ error: err });
    res.json({ message: "Payment deleted successfully" });
  });
});

// -------------------- REPORTS --------------------
app.get("/reports/top-freelancers", (req, res) => {
  const sql = `
    SELECT u.UserID, u.UserName, ROUND(AVG(r.Rating),2) AS AvgRating
    FROM Review r
    JOIN Users u ON u.UserID = r.GivenFor
    GROUP BY r.GivenFor
    ORDER BY AvgRating DESC
    LIMIT 10
  `;
  db.query(sql, (err, results) => {
    if (err) return res.json({ error: err });
    res.json(results);
  });
});

app.get("/reports/revenue", (req, res) => {
  const sql = `
    SELECT u.UserID, u.UserName, IFNULL(SUM(p.Amount),0) AS TotalRevenue
    FROM Users u
    LEFT JOIN Orders o ON u.UserID = o.FulfilledBy
    LEFT JOIN Payment p ON o.OrderID = p.OrderID
    GROUP BY u.UserID
    ORDER BY TotalRevenue DESC
  `;
  db.query(sql, (err, results) => {
    if (err) return res.json({ error: err });
    res.json(results);
  });
});

// -------------------- SERVER --------------------
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
