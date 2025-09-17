
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')));

const getDatabase = () => {
  const data = fs.readFileSync('database.json');
  return JSON.parse(data);
};

const saveDatabase = (data) => {
  fs.writeFileSync('database.json', JSON.stringify(data, null, 2));
};


app.get('/api/products', (req, res) => {
  const products = getDatabase();
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const products = getDatabase();
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  saveDatabase(products);
  res.status(201).json(newProduct);
});

app.put('/api/products/:id', (req, res) => {
  const products = getDatabase();
  const updatedProducts = products.map(product => 
    product.id === parseInt(req.params.id) ? { ...product, ...req.body } : product
  );
  saveDatabase(updatedProducts);
  res.json(req.body);
});

app.delete('/api/products/:id', (req, res) => {
  const products = getDatabase();
  const filteredProducts = products.filter(product => product.id !== parseInt(req.params.id));
  saveDatabase(filteredProducts);
  res.status(204).send();
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});