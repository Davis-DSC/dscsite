import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { NavbarC } from './components/NavbarC';
import { Footer } from './components/Footer';



class App extends Component {
  render() {
    return (

      <React.Fragment>
           <NavbarC />
           <Homepage />
           <Footer />
       </React.Fragment>
    );
  }
}

export default App;
