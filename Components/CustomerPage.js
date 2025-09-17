// CustomerPage.js
import React, { useState } from 'react';

const CustomerPage = ({ customers, setCustomers }) => { // Receive customers as a prop
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '', address: '' });

  const addCustomer = (e) => {
    e.preventDefault();
    setCustomers(prev => [...prev, customer]);
    setCustomer({ name: '', email: '', phone: '', address: '' });
  };

  return (
    <div>
      <h1>Customer Management</h1>
      <form onSubmit={addCustomer}>
        <input type="text" value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} placeholder="Customer Name" required />
        <input type="email" value={customer.email} onChange={(e) => setCustomer({ ...customer, email: e.target.value })} placeholder="Customer Email" required />
        <input type="text" value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} placeholder="Customer Phone" />
        <input type="text" value={customer.address} onChange={(e) => setCustomer({ ...customer, address: e.target.value })} placeholder="Customer Address" />
        <button type="submit">Add Customer</button>
      </form>
      <div className="customer-list">
        <h2>Customer List</h2>
        <ul>
          {customers.map((c, index) => (  // Use the customers prop here
            <li key={index}>{c.name} - {c.email} - {c.phone} - {c.address}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomerPage;