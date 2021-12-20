import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import './pokemonbox.css';

import sample1 from './images/sun.mp4';
    



function PokemonBox (props) {
    return(
        <div>
       <video id='background-video' autoPlay loop muted><source src={sample1} type='video/mp4'/></video>
      
        <div class="wrapper">
            
    <div class="left">
    <h4>Default</h4>
        <img src={props.sprite} alt={props.name} />
              
        <img src={props.back} alt={props.name} /><br></br>
        <h4>Shiny</h4>
        <img src={props.shiny} alt={props.name} />
        <img src={props.shinyback} alt={props.name} />

        
        
    </div>
    <div class="right">
        <div class="info">
            <h3>{props.name}</h3>
            <div class="info_data">
                 <div class="data">
                    <h4>Types</h4>
                    {props.types.map((type, key) => (
                <div key={key}>
                  <span>{type.type.name}</span>
                </div>
              ))}
                 </div>
                 <div class="data">
                   <h4>Abilities</h4>
                   {props.abilities.map((ability, key) => (
                <div key={key}>
                  <span>{ability.ability.name}</span>
                </div>
              ))}
              </div>
            </div>
        </div>
      
      <div class="projects">
            <h3>Base Stats</h3>
            <div class="projects_data">
                 <div class="data">
                 {props.stats.map((stat, key) => (
                <div key={key}>
                  <strong>{stat.stat.name}</strong>
                  <ProgressBar  now={stat.base_stat} max={255} label={stat.base_stat} />
                </div>
              ))}
                    
                 </div>
                 <div class="data">
                 {/* place more available sessions here */}
              </div>
            </div>
        </div>
      
        
    </div>
</div>
            
           
        </div>
       
        
    )
}
export default PokemonBox;