import React, { useState } from "react";
import '../../scss/Styles/Navbar.scss'
import { HashLink as Link } from 'react-router-hash-link'
import {GiHamburgerMenu} from 'react-icons/gi'
import SVG from "../Svg";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };
    return (
            <div className="navbar">
                <div className="navbar__logo">
                    <SVG/>
                </div>
                {menuOpen ? (
                    <div className="navbar__active">
                        <Link className="navbar__linkItem" to='#home' smooth>Home</Link>
                        <Link className="navbar__linkItem" to='#contacts' smooth>Contact</Link>
                        <Link className="navbar__linkItem" to='#about' smooth>About</Link>
                    </div> 
                ) : (
                    <div className='navbar__links'>
                        <Link className="navbar__linkItem" to='#home' smooth>Home</Link>
                        <Link className="navbar__linkItem" to='#contacts' smooth>Contact</Link>
                        <Link className="navbar__linkItem" to='#about' smooth>About</Link>
                    </div>
                )}
                <div className="navbar__hamburger">
                    <GiHamburgerMenu onClick={menuToggleHandler}/>
                </div>
            </div>               
    )
}

export default Navbar;
