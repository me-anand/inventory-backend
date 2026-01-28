import express, { json } from 'express';
import { readFileSync, writeFileSync } from 'fs';
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(json());

const DATA_FILE = './products.json';

// Helper function to read the JSON file
const readData = () => {
    const data = readFileSync(DATA_FILE);
    return JSON.parse(data);
};

// Helper function to write to the JSON file
const writeData = (data) => {
    writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// 1. GET Method: Display all products
app.get('/getProducts', (req, res) => {
    const products = readData();
    res.status(200).json(products);
});

// 2. POST Method: Add a new product
app.post('/addProduct', (req, res) => {
    const products = readData();
    const newProduct = req.body; // Expects {productId, productName, description, Stock}
    
    products.push(newProduct);
    writeData(products);
    
    res.status(201).json({ message: "Product added successfully", product: newProduct });
});

// 3. DELETE Method: Delete product by productId
app.delete('/deleteProduct', (req, res) => {
    let products = readData();
    const idToDelete = req.body.productId || req.query.productId;

    const originalLength = products.length;
    products = products.filter(p => p.productId != idToDelete);

    if (products.length < originalLength) {
        writeData(products);
        res.json({ message: `Product with ID ${idToDelete} deleted.` });
    } else {
        res.status(404).json({ message: "Product not found." });
    }
});

// 4. UPDATE Method: Update product description
app.put('/updateProduct', (req, res) => {
    let products = readData();
    const { productId, description } = req.body;

    const index = products.findIndex(p => p.productId == productId);

    if (index !== -1) {
        products[index].description = description;
        writeData(products);
        res.json({ message: "Product updated successfully", product: products[index] });
    } else {
        res.status(404).json({ message: "Product not found." });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});