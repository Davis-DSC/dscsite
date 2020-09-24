import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { NavbarC } from './components/NavbarC';
import { Footer } from './components/Footer';
import Container from '@material-ui/core/Container';



class App extends Component {
  render() {
    return (
      <React.Fragment>

               <Container>
              <NavbarC />
               <Homepage />
              </Container>
              <Footer />


       </React.Fragment>
    );
  }
}

export default App;
