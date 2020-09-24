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

           <Router>
              <Container>
              <NavbarC />
              <Switch>
                 <Route exact path="/" component={Homepage} />
                 <Route path="/about" component={Homepage} />
                 <Route path="/events" component={Homepage} />
                 <Route path="/join" component={Homepage} />
                 <Route component={Homepage} />
              </Switch>
              </Container>
              <Footer />

           </Router>

       </React.Fragment>
    );
  }
}

export default App;
