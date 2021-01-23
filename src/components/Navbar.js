import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        PantryPal
                    </Link>
                    <div className='menu-icon'>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default navbar
