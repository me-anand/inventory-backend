# 📦 Simple Inventory Management System (Backend)

This project is a **Simple Inventory Management System (IMS)** backend built using **Node.js and Express.js**.  
It provides REST API endpoints to manage products including viewing, adding, updating, and deleting products.

Product data is stored in a local **JSON file**, making this project simple and beginner-friendly.

---

## 🚀 Features

- Display all products
- Add a new product
- Update product description
- Delete a product
- JSON-based data storage
- Tested using Thunder Client / Postman

---

## 🛠 Tech Stack

- Node.js
- Express.js
- File System (`fs`)
- Thunder Client (API testing)

---

## 📂 Project Structure

inventory-backend/
├── index.js
├── products.json
├── package.json
├── package-lock.json
├── .gitignore
└── README.md


---

## ⚙️ How to Run the Project

### 1️⃣ Install dependencies
```bash
npm install
2️⃣ Start the server
node index.js
Server runs on:

http://localhost:3000
📌 API Endpoints
🔹 GET – Get all products
GET /getProducts
Returns all products from products.json.

🔹 POST – Add a new product
POST /addProduct
Request Body:

{
  "productId": 10,
  "productName": "Veg Sandwich",
  "description": "Quick snack item",
  "Stock": true
}
🔹 DELETE – Delete a product
DELETE /deleteProduct
Request Body:

{
  "productId": 3
}
🔹 PUT – Update product description
PUT /updateProduct
Request Body:

{
  "productId": 1,
  "description": "Preferred by Both Vegetarians and Non Vegetarians"
}
🧪 Testing
All APIs were tested using Thunder Client (VS Code extension).
POST, PUT, and DELETE requests cannot be tested directly in the browser.

📝 Assignment Summary
Express server created using Node.js

CRUD operations implemented

Data handled via JSON file

APIs tested successfully

Project uploaded to GitHub

👨‍💻 Author
Anand M Sajith






