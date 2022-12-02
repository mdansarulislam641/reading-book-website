import React from 'react';
import logo from '../../logobook.jpg';
import './Navbar.css';
const Navbar = () => {
    return (
        <div className='navbar-container'>
              <img src={logo} alt="" />
              <h1>READING BOOK</h1>
        </div>
    );
};

export default Navbar;