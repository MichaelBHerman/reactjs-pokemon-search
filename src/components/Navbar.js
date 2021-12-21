import React from 'react';
import './style.css';
import navlogo from './images/pokedex.png';
import { NavLink } from 'react-router-dom';
import jigglypuff from "./images/jigglypuff.gif";
import HomePage from '../pages/home';


function Navbar() {
    return (
        <div className="Navbar">
            
            {/* <img src={jigglypuff} className='Jigglypuff'/> */}
            <img src={navlogo} className='Navlogo'/>
            <HomePage />
            {/* <nav>
                <NavLink to='./search'>Search</NavLink>
            </nav> */}
           
            
        </div>
    );
}

export default Navbar;
