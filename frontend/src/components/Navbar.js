// Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo">
          <h1>BUG-TRACKING-SYSTEM</h1>
        </div>
        <nav>
          <ul>
          <br/><br/><br/><br/>
            <li>
              <Link to="/">
                <i className="fas fa-home"></i>
                Home
              </Link>
            </li>
 <br/><br/>
 <br/>
            <li>
              <Link to="/admin">
                <i className="fas fa-user-shield"></i>
                Admin
              </Link>
            </li>
            <br/><br/>
            <li>
              <Link to="/contact">
                <i className="fas fa-envelope"></i>
                Contact
              </Link>
            </li>
            <br/><br/>
            <li>
              <Link to="/blog">
                <i className="fas fa-blog"></i>
                Create Bugs
              </Link>
              
            </li>
            <br/><br/>
            <li>
              <Link to="/view-bugs">
                <i className="fas fa-View Bugs"></i>
                View Bugs
              </Link>
            </li>
            <br/><br/>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
