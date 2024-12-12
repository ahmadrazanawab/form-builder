import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="bg-blue-500 p-4 text-white flex justify-between">
    <div className="font-bold text-lg">Form Builder</div>
    <div className="flex space-x-4">
      <Link to="/">Home</Link>
      <Link to="/view-form">View Form</Link>
      <Link to="/submissions">Submissions</Link>
    </div>
  </nav>
);

export default Navbar;
