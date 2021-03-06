import React, { Component } from 'react';
import { BrowserRoter as Router, Switch, Route } from "react-router-dom";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";


import Home from './home';
import Signup from './sign-up';
import About from './about';
import Contact from './contact';
import StockList from './stock-list';
import LoginForm from './login-form';


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
      fetch(`https://nearybrosaquatics-api.herokuapp.com/user/get/${Cookies.get("username")}`)
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
      <div className="app-wrapper">
        {this.state.user.id ? <button className="btn" onClick={this.handleLogout}>Logout</button> : <Link to="/login-form"><button className="btn" >Log In/Sign Up</button></Link>}
      {this.state.loading 
        ?
        <h1>Loading...</h1>
        :       
        <Switch>
        <Route exact path="/" render={props => <Home {...props} handleSetUser={this.handleSetUser} handleLogout={this.handleLogout} />}  />
        <Route path="/sign-up" render={props => <Signup {...props} handleSetUser={this.handleSetUser} />} />
        <Route path="/login-form" render={props => <LoginForm changeRoute={props.history.push} {...props} handleSetUser={this.handleSetUser} handleLogout={this.handleLogout}/>} />
        <Route path="/about" render={props => <About {...props} user={this.state.user} handleSetUser={this.handleSetUser} handleSetError={this.handleSetError} />} />
        <Route path="/contact" render={props => <Contact {...props} user={this.state.user} handleSetUser={this.handleSetUser} handleSetError={this.handleSetError} />} />
        <Route path="/stock-list" render={props => <StockList {...props} user={this.state.user} handleSetUser={this.handleSetUser} handleSetError={this.handleSetError} />} />
      </Switch>}
      <p>{this.state.error}</p>
      </div>
    );
  }
}
