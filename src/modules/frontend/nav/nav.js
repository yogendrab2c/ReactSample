import React, { Component } from 'react';  
import { Link } from 'react-router-dom';
const Nav = () => {  
  return (  
    <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
              
                <Link to="/" className="navbar-brand">Home</Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
              <Link to="/products">Products</Link>
              </li>
              <li>
              <Link to="/contact">Contact Us</Link>
              </li>
              <li>
              <Link to="/aboutus">Abouts</Link>
              </li>
             
             
            </ul>
          </div>
        </div>
      </nav> 
  )  
}  

  
export default Nav;  