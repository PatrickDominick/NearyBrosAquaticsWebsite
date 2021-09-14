import React, { Component } from 'react';
import { BrowserRoter as Router, Switch, Route } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios";


import Home from './home';
import signup from './sign-up';
import About from './about';
import Contact from './contact';
import StockList from './stock-list';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      loading: true,
      error: ""
    }
  }

  componentDidMount() {
    if (Cookies.get("username")) {
      fetch(`http://127.0.0.1:5000/user/get/${Cookies.get("username")}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ 
          user: data,
          loading: false
        })
      })
      .catch(error => {
        console.log("Error getting user data: ", error)
        this.setState({ error: "An error occurred. Try refreshing the page." })
      })
    }
    else {
      this.setState({ loading: false })
    }
  }

  handleSetUser = (userData) => {
    this.setState({ user: userData })
  }

  handleSetError= (errorData) => {
    this.setState({ error: errorData })
  }

  handleLogout = () => {
    Cookies.remove("username")
    this.setState({ user: {} })
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={props => <Home {...props} handleSetUser={this.handleSetUser} />}  />
        <Route path="/about" render={props => <About {...props} user={this.state.user} handleSetUser={this.handleSetUser} handleSetError={this.handleSetError} />} />
        <Route path="/contact" render={props => <Contact {...props} user={this.state.user} handleSetUser={this.handleSetUser} handleSetError={this.handleSetError} />} />
        <Route path="/stock-list" render={props => <StockList {...props} user={this.state.user} handleSetUser={this.handleSetUser} handleSetError={this.handleSetError} />} />
      </Switch>
    );
  }
}
