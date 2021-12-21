import React from 'react';
import { Button } from 'react-bootstrap';
import PokemonDisplay from './components/PokemonDisplay';
import HomePage from './pages/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TrainerCard from './components/trainercard';


function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
        <Route exact path='/' component={PokemonDisplay} />
        <Route path = '/search' component={HomePage} />
        <Route path = '/trainercard' component={TrainerCard} />
      

      
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
