import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        <img src="/images/chef(1).png" width="45px" height="45px"/>PantryPal
                    </Link>
                    <Link to='/Login' className='navbar-logo'>
                        Login
                    </Link>
                    <div className='menu-icon'>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default navbar
