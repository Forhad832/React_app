import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header>
        <div className='container'>
          <nav>
          <div>
            <h2>Forhad</h2>
        </div>
        <div>
            <NavLink className='nav-link' to="/home">Home</NavLink>
            <NavLink className='nav-link' to="/about">About</NavLink>
            <NavLink className='nav-link' to="/services">Services</NavLink>
            <NavLink className='nav-link' to="/contact">Contact</NavLink>
            <NavLink className='nav-link' to="/blogs">Blogs</NavLink>
            <NavLink className='nav-link' to="/country">Country</NavLink>
        </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
