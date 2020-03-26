import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { NavbarC } from './components/NavbarC';



class App extends Component {
  render() {
    return (

      <React.Fragment>
        <Router>
          <NavbarC />

          <Homepage />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
