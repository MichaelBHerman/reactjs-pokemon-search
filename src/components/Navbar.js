import React from 'react';
import './style.css';
import navlogo from './images/pokedex.png';
import { NavLink } from 'react-router-dom';
import jigglypuff from "./images/jigglypuff.gif";
import HomePage from '../pages/home';
import audrey from './images/audreyfont.png';
import trainer from './images/trainer1.png';

function Navbar() {
    return (
        <div className="Navbar">
           
            <img src={audrey} className='Navlogo1' />
            <img src={navlogo} className='Navlogo'/>
            <HomePage />
            <nav>
                <NavLink to='./trainercard'>Trainer Card</NavLink>
            </nav>
           
            
        </div>
    );
}

export default Navbar;
