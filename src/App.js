import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ListPage from './ListPage.js';
import PokeHome from './PokeHome.js';
import Header from './Header.js';
//import MySpecialFooter from './MySpecialFooter.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <PokeHome {...routerProps} />}
            />
            <Route
              path="/list"
              exact
              render={(routerProps) => <ListPage {...routerProps} />}
            />
          </Switch>
          {/* <MySpecialFooter /> */}
        </Router>
      </div>
    )
  }
}

