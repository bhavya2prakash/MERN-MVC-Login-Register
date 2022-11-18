import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import "./navbar.css"
function navbar() {
  return (
   
    
    <nav className="nav">
       
    <div className="site-title">
      Welcome
    </div>
    <ul>
      <Link to="/">Home</Link>  
      <Link to="/about">About Us</Link>
      <Link to="/jobs">Jobs</Link>
      <Link to="/contact">Contact Us</Link>
    </ul>
    
  </nav>
   
   
  )
}

export default navbar