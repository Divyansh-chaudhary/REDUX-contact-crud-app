import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar bg-primary d-flex justify-content-between py-2 px-3">
      <div className="logo">
        <Link to="/" className="text-white text-uppercase" >
          Contact book
        </Link>
      </div>
      <Link to="/contacts/add" className="btn btn-light">
        create contact
      </Link>
    </nav>
  );
}

export default Navbar
