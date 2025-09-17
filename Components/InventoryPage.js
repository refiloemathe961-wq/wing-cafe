import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const InventoryPage = () => {
  const [products, setProducts] = useState([
    { id: 1, productName: 'Coffee', description: 'Freshly brewed coffee', category: 'Beverage', price: 30, quantity: 20 },
    { id: 2, productName: 'Tea', description: 'Herbal tea', category: 'Beverage', price: 25, quantity: 15 },
  ]);
  const [productToEdit, setProductToEdit] = useState(null); 

  const addProduct = (product) => {
    if (productToEdit) {
      updateProduct({ ...productToEdit, ...product });
    } else {
      setProducts([...products, { id: Date.now(), ...product }]);
    }
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
    setProductToEdit(null); 
  };

  const handleUpdateClick = (product) => {
    setProductToEdit(product); 
  };

  return (
    <div>
      <h1>Inventory Management</h1> {}
      <ProductForm onSubmit={addProduct} productToEdit={productToEdit} />
      <ProductList products={products} onDelete={deleteProduct} onUpdate={handleUpdateClick} />
    </div>
  );
};

export default InventoryPage;