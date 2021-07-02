import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom";

import style from "./App.css";
import history from "./services/history";

import Header from './Header';
import Home from './Home';
import Name from './Name';
import Contact from './Contact';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Header />
          <div className={style.header_align}>
            <div className={style.center}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Name" exact component={Name} />
                <Route path="/Contact" exact component={Contact} />
                <Redirect to="/" />
              </Switch>
            </div>
        </div>
      </Router>
    </div>
    );
  }
}
