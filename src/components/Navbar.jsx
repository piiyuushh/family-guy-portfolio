import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
            <img src="/images/brian.png" alt="Brian" className="navbar-img" />
            <ul className="navbar-links">
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
