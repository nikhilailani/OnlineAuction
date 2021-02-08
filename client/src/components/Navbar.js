import React from 'react';
import {Link} from 'react-router-dom'


function Navbar() {
    return(
        <nav>
        <div class="nav-wrapper" style={{background:"green"}}>
        <a href="/" class="brand-logo">logo</a> 

        <ul id="nav-mobile" class="right">
            <li><Link to="/">Home</Link></li>
          
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">LogIn</Link></li>
          </ul>
        </div>
        </nav>
    )
    
}

export default Navbar;