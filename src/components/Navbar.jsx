import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="nav">
        <div className="logo">
            <Link className='nav-link' to="/">- Simon Brachmann</Link>
        </div>
        <div className="nav-links">
            <div className="nav-item">
                <Link className='nav-link' to="/">
                    Home
                </Link>
            </div>
            <div className="nav-item">
                <Link className='nav-link' to="/projects">
                    Projects
                </Link>
            </div>
            <div className="nav-item">
                <Link className='nav-link' to="/contact">
                    Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar