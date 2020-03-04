import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { Navibar } from './components/Navibar';



class App extends Component {
  render() {
    return (

      <React.Fragment>
        <Router>
          <Navibar />
          <Homepage />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
