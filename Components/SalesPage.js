import React, { useState } from 'react';

const SalesPage = ({ setSalesHistory }) => {
  const initialProducts = [
    { id: 1, name: 'meat', price: 15, quantity: 100 },
    { id: 2, name: 'pork', price: 10, quantity: 100 },
    { id: 3, name: 'fish', price: 12, quantity: 100 },
    { id: 4, name: 'Bread', price: 20, quantity: 100 },
    { id: 5, name: 'Milk', price: 18, quantity: 100 },
    { id: 6, name: 'Cheese', price: 30, quantity: 100 },
    { id: 7, name: 'Chicken', price: 60, quantity: 100 },
    { id: 8, name: 'Beef', price: 70, quantity: 100 },
    { id: 9, name: 'Fish', price: 80, quantity: 100 },
    { id: 10, name: 'Rice', price: 15, quantity: 100 },
    { id: 11, name: 'Pasta', price: 25, quantity: 100 },
    { id: 12, name: 'Eggs', price: 20, quantity: 100 },
    { id: 13, name: 'Tomato', price: 15, quantity: 100 },
    { id: 14, name: 'Potato', price: 10, quantity: 100 },
    { id: 15, name: 'Carrot', price: 12, quantity: 100 },
  ];

  const [salesEntry, setSalesEntry] = useState({ productName: '', quantity: '', customerName: '' });
  const [products, setProducts] = useState(initialProducts);

  const recordSale = (e) => {
    e.preventDefault();
    const product = products.find(p => p.name === salesEntry.productName);
    const price = product.price * salesEntry.quantity;

    if (product.quantity >= salesEntry.quantity) {
      setSalesHistory(prev => [...prev, { ...salesEntry, price }]);
      setProducts(prev => 
        prev.map(p => 
          p.name === salesEntry.productName ? { ...p, quantity: p.quantity - salesEntry.quantity } : p
        )
      );
      setSalesEntry({ productName: '', quantity: '', customerName: '' });
    } else {
      alert('Not enough stock available');
    }
  };

  const handleBuy = (product) => {
    const quantity = prompt(`Enter quantity to buy for ${product.name}:`);
    if (quantity && !isNaN(quantity)) {
      const newQuantity = parseInt(quantity);
      setProducts(prev => 
        prev.map(p => 
          p.id === product.id ? { ...p, quantity: p.quantity + newQuantity } : p
        )
      );
      setSalesHistory(prev => [...prev, { productName: product.name, quantity: newQuantity, price: product.price * newQuantity, customerName: 'N/A (Bought)' }]);
      alert(`Bought ${newQuantity} of ${product.name}`);
    }
  };

  const handleSell = (product) => {
    const quantity = prompt(`Enter quantity to sell for ${product.name}:`);
    if (quantity && !isNaN(quantity)) {
      const newQuantity = parseInt(quantity);
      const price = product.price * newQuantity;
      setSalesHistory(prev => [...prev, { productName: product.name, quantity: newQuantity, price, customerName: 'N/A (Sold)' }]);
      setProducts(prev => 
        prev.map(p => 
          p.id === product.id ? { ...p, quantity: p.quantity - newQuantity } : p
        )
      );
      alert(`Sold ${newQuantity} of ${product.name} for R${price}`);
    }
  };

  return (
    <div>
      <h1>Sales Management</h1>
      <form onSubmit={recordSale}>
        <select
          value={salesEntry.productName}
          onChange={(e) => setSalesEntry({ ...salesEntry, productName: e.target.value })}
          required
        >
          <option value="" disabled>Select Product</option>
          {products.map(product => (
            <option key={product.id} value={product.name}>{product.name}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Quantity"
          value={salesEntry.quantity}
          onChange={(e) => setSalesEntry({ ...salesEntry, quantity: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Customer Name"
          value={salesEntry.customerName}
          onChange={(e) => setSalesEntry({ ...salesEntry, customerName: e.target.value })}
          required
        />
        <button type="submit">Record Sale</button>
      </form>

      <h2>Available Products</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price (R)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>R{product.price.toFixed(2)}</td>
              <td>
                <button onClick={() => handleBuy(product)}>Buy</button>
                <button onClick={() => handleSell(product)}>Sell</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesPage;