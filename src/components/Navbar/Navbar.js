import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Login } from './Login';


function Navbar() {
    const [click, setClick] = useState(false);
    const [login, setlogin] = useState(true);

    handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showLogin = () => {
        if (window.innerWidth <= 960){
            setLogin(false);
        }
        else{
            setLogin(true);
        }
    };

    useEffect(()=>{
        showLogin();
    }, []);

    window.addEventListener('resize', showLogin);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        <img src="/images/chef(1).png" width="45px" height="45px"/>PantryPal
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={ click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Your Pantry
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Add ingredients
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Profile
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                About / Contact
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                    <div className='menu-icon'>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
