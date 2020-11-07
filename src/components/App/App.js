import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Details" component={Details}/>
          <Route exact path="/AddMovie" component={AddMovie}/>
        </Router>
        <p>Empty Page</p>
      </div>
    );
  }
}

export default App;
