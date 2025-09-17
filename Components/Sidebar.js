import React from 'react';
import { Link } from 'react-router-dom';
import wings from './wings.jpg'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={wings} alt="Wings Cafe Logo" className='logo' style={{ width: '80%', marginBottom: '20px' }} />
      <h2>Wings Cafe</h2>
      <ul>
        <li><Link to="/"><i className="fas fa-tachometer-alt"></i>Dashboard</Link></li>
        <li><Link to="/inventory"><i className="fas fa-box"></i>Inventory</Link></li>
        <li><Link to="/sales"><i className="fas fa-shopping-cart"></i>Sales</Link></li>
        <li><Link to="/customers"><i className="fas fa-users"></i>Customers</Link></li>
        <li><Link to="/reporting"><i className="fas fa-chart-line"></i>Reporting</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;