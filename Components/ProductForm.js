import React, { useEffect, useState } from 'react';

const ProductForm = ({ onSubmit, productToEdit }) => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    if (productToEdit) {
      setProductName(productToEdit.productName);
      setDescription(productToEdit.description);
      setCategory(productToEdit.category);
      setPrice(productToEdit.price);
      setQuantity(productToEdit.quantity);
    } else {
      setProductName('');
      setDescription('');
      setCategory('');
      setPrice('');
      setQuantity('');
    }
  }, [productToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ productName, description, category, price, quantity });
   
    setProductName('');
    setDescription('');
    setCategory('');
    setPrice('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <input type="number" placeholder="Initial Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
      <button type="submit">{productToEdit ? 'Update Product' : 'Add Product'}</button>
    </form>
  );
};

export default ProductForm;