import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Aboutpage } from "./components/Aboutpage";
import { Joinpage } from "./components/Joinpage";
import { Eventpage } from "./components/Eventpage";
import { NavbarC } from "./components/NavbarC";
import { Footer } from "./components/Footer";
import Container from "@material-ui/core/Container";
import ReactGA from "@react-ga/react-ga";

const TRACKING_ID = "G-KDXMSSG090";
ReactGA.initialize(TRACKING_ID);
ReactGA.initialize(TRACKING_ID, {
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: 123,
  },
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavbarC />

          <Container>
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/about" component={Aboutpage} />
              <Route path="/join" component={Joinpage} />
              <Route path="/event" component={Eventpage} />
              <Route path="*" component={Homepage} />
            </Switch>
          </Container>

          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
