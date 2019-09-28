import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Logo from "./components/Logo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page__container">
          <Logo />
          <Nav />
          {this.showContent(routes)}
          <Footer />
        </div>
      </Router>
    );
  }

  showContent = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="page"
              timeout={{
                enter: 80,
                leave: 80
              }}
            >
              <Route
                location={location}
                render={() => (
                  <div className="page">
                    <Switch>{result}</Switch>
                  </div>
                )}
              />
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  };
}

export default App;
