import React, {Component} from "react";
import { HashLink as Link } from 'react-router-hash-link';


class Nav extends Component{
    render(){
        return(
         <nav class="navbar" id="navbar">
        <span class="navbar-toggle" id="js-navbar-toggle">
            <i class="fas fa-bars"></i>
        </span>
        <a href="#" class="logo">Reva Hack</a>
        <ul class="main-nav" id="js-menu">
            <li>
            <Link to="#section-about" class="nav-links">About us</Link>
            </li>
            <li>
            <Link to="#section-sponsor" class="nav-links">Sponsors</Link>
            </li>
            <li>
            <Link to="#section-speaker" class="nav-links">Speakers</Link>
            </li>
            <li>
            <Link to="#section-team" class="nav-links">Team</Link>
            </li>
        </ul>
    </nav>
            
            
                
                
            
        );
    }
}

export default Nav;