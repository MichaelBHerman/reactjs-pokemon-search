import React from 'react';
import trainer from './images/trainer1.png';
import sample1 from './images/sun.mp4';
import './style.css';

function TrainerCard () {
    return(
        <div>
            <video id='background-video' autoPlay loop muted><source src={sample1} type='video/mp4'/></video>
            <img src={trainer} className='TrainerCard' />

        </div>
    )
}

export default TrainerCard;