import React from 'react';
import './style.css';
import navlogo from './images/pokedex.png';
import { NavLink } from 'react-router-dom';
import jigglypuff from "./images/jigglypuff.gif";
import HomePage from '../pages/home';
import audrey from './images/audrey2.png';
import trainer from './images/trainer1.png';

function Navbar() {
    return (
        <div className="Navbar">
            <nav>
                {/* <img src={trainer} className='Navlogo2'/> */}
            </nav>
            {/* <img src={jigglypuff} className='Jigglypuff'/> */}
            <img src={audrey} className='Navlogo1' />
            <img src={navlogo} className='Navlogo'/>
            <HomePage />
            {/* <nav>
                <NavLink to='./search'>Search</NavLink>
            </nav> */}
           
            
        </div>
    );
}

export default Navbar;
