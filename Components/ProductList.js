import React from 'react';

const ProductList = ({ products, onDelete, onUpdate }) => {
  const handleUpdateClick = (product) => {
    onUpdate(product);
  };

  return (
    <div className="product-list">
      <h2>Product List</h2> {/* Header added for product list */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.productName}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>R{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => handleUpdateClick(product)}>Update</button>
                <button onClick={() => onDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;