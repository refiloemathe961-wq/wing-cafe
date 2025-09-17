
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/DashBoard';
import InventoryPage from './Components/InventoryPage';
import SalesPage from './Components/SalesPage';
import CustomerPage from './Components/CustomerPage';
import ReportingPage from './Components/ReportingPage';
import Sidebar from './Components/Sidebar';
import './App.css';

const App = () => {
  const [salesHistory, setSalesHistory] = useState([]);
  const [customers, setCustomers] = useState([]);

  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard salesHistory={salesHistory} customers={customers} />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/sales" element={<SalesPage setSalesHistory={setSalesHistory} />} />
            <Route path="/customers" element={<CustomerPage customers={customers} setCustomers={setCustomers} />} /> {/* Pass both customers and setCustomers */}
            <Route path="/reporting" element={<ReportingPage salesHistory={salesHistory} customers={customers} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;