import React from 'react';

const ReportingPage = ({ salesHistory }) => {
  const totalSalesValue = salesHistory.reduce((sum, sale) => sum + sale.price, 0);
  
  return (
    <div>
      <h1>Sales Reporting</h1>
      <h2>Sales History</h2>
      <p>Total Sales Value: R{totalSalesValue}</p>
      <ul>
        {salesHistory.map((sale, index) => (
          <li key={index}>
            {sale.customerName !== 'N/A (Bought)' ? 
              `Sold ${sale.quantity} of ${sale.productName} for R${sale.price} (Customer: ${sale.customerName})` :
              `Bought ${sale.quantity} of ${sale.productName} for R${sale.price}`
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportingPage;