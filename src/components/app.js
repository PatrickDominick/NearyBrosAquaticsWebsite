import React, { Component } from 'react';
import { BrowserRoter as Router, Switch, Route } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import home from './home';
import about from './about';
import contact from './contact';
import stockList from './stock-list';


export default class App extends Component {
  constructor(props) {
    super(props);

    // Icons();
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/about" component={about} />
        <Route path="/contact" component={contact} />
        <Route path="/stock-list" component={stockList} />
      </Switch>
    );
  }
}
