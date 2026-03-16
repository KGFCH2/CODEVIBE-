import React from "react"
import { useNavigate, Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus, FaTachometerAlt } from "react-icons/fa";
const Head = () => {
  return (
    <header>
      <div>
        <img src="./assets/websitelogo.png" alt="logo" />
      </div>
     <div className="header-nav">
  <Link to="/Login" className="nav-link">
    <FaSignInAlt className="nav-icon" /> Login
  </Link>

  <Link to="/Signup" className="nav-link">
    <FaUserPlus className="nav-icon" /> Sign Up
  </Link>

  <Link to="/Dashboard" className="nav-link">
    <FaTachometerAlt className="nav-icon" /> Dashboard
  </Link>
</div>

      <h1>🌺 Bloom with Jiya</h1>
      <p>Learn coding, grow your skills, earn certificates - BEWITHME!</p>
    </header>
  );
}

export default Head;