import React from 'react';
import './App.css';

import { Navbar } from './components/navbar/Navbar.js'
import { Switch, Route, Link } from 'react-router-dom';
import BeersList from './components/beers/BeersList.js';
import ShowBeer from './components/beers/ShowBeer.js';
import RandomBeer from './components/beers/RandomBeer.js';
import NewBeer from './components/beers/NewBeer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Link to="/beers">Beers</Link>
      <Link to="/random-beer">Random beer</Link>
      <Link to="/new-beer">New beer</Link>
      <Switch>
        <Route exact path="/beers" component={BeersList}></Route>
        <Route exact path="/beers/:beerId" component={ShowBeer}></Route>
        <Route exact path="/random-beer" component={RandomBeer}></Route>
        <Route exact path="/new-beer" component={NewBeer}></Route>
      </Switch>
    </div>
  );
}

export default App;
