
import React from 'react';

const DashBoard = ({ salesHistory, customers}) => {
  const totalProducts = 50; 
  const totalValue = 5000; 
  const lowStockAlerts = 5; 
  const totalSales = salesHistory.length; 
  const totalCustomers = customers.length; 

  return (
    <div>
      <h1>Wings Cafe Inventory</h1>
      <div className="overview">
        <h2>Overview</h2>
        <div className="stats">
          <div className="stat-card">
            <h3> Products</h3>
            <p>{totalProducts}</p>
          </div>
          <div className="stat-card">
            <h3>Total Value of Products</h3>
            <p>R{totalValue}</p>
          </div>
          <div className="stat-card alert">
            <h3>Low Stock Alerts</h3>
            <p>{lowStockAlerts} items</p>
          </div>
          <div className="stat-card">
            <h3>Total Sales</h3>
            <p>{totalSales}</p>
          </div>
          <div className="stat-card">
            <h3>Total Customers</h3>
            <p>{totalCustomers}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;