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

           <Router>
              <Switch>
                 <Route exact path="/" component={Homepage} />
                 <Route component={Homepage} />

              </Switch>
           </Router>
           <Footer />
       </React.Fragment>
    );
  }
}

export default App;
