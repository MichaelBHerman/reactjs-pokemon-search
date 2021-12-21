import React from 'react';
import { Button } from 'react-bootstrap';
import PokemonDisplay from './components/PokemonDisplay';
import HomePage from './pages/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
        <Route exact path='/' component={PokemonDisplay} />
        <Route path = '/search' component={HomePage} />
      

      
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
