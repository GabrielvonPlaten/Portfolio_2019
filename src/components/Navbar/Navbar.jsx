import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.sass';

function Navbar() {
  return (
    <div>
      <header>
        <ul className="navbar-list">
          <NavLink exact to="/" activeClassName="is-active navbar-item" className="navbar-item">HOME</NavLink>
          <NavLink to="/work" activeClassName="is-active navbar-item" className="navbar-item">WORK</NavLink>
          <NavLink to="/about" activeClassName="is-active navbar-item" className="navbar-item">ABOUT</NavLink>
          <NavLink to="/blog" activeClassName="is-active navbar-item" className="navbar-item">BLOG</NavLink>
        </ul>
      </header>
    </div>
  )
}

export default Navbar
