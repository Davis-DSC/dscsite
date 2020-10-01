import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { Aboutpage } from './components/Aboutpage';
import { NavbarC } from './components/NavbarC';
import { Footer } from './components/Footer';
import Container from '@material-ui/core/Container';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>

              <NavbarC />

              <Container>
              <Switch>
                <Route path='/' exact component={Homepage} />
                <Route path='/about' component={Aboutpage} />

                <Route path='*' component={Homepage} />

              </Switch>
              </Container>

              <Footer />

        </Router>
       </React.Fragment>
    );
  }
}

export default App;
