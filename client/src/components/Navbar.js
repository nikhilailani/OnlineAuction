import React from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import About from './About'
import { NavLink } from "react-router-dom";


function Navbar(props) {

 
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