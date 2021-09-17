import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import Footer from './footer';

export default class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            error: "",
            loading: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
    
        if (this.state.username === "" || this.state.password === "") {
          this.setState({ error: "Please fill out all fields" });
        } else {
          this.setState({
            loading: true,
            error: "",
          });
    
          fetch("https://nearybrosaquatics-api.herokuapp.com/user/verification", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
    
              this.setState({ loading: false });
              if (data === "User NOT Verified") {
                this.setState({ error: "Invalid username or password " });
              } else {
                this.props.handleSetUser(data);
                Cookies.set("username", this.state.username);
                this.props.changeRoute("/");
              }
            })
            .catch((error) => {
              console.log("Error logging in", error);
              this.setState({
                loading: false,
                error: "An error occurred. Please try again later.",
              });
            });
        }
      }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    render() {
        return (
            <form className="form-wrapper" onSubmit={this.handleSubmit}>
              <div className="skewed-header">
                <div className="header-bg" style={{backgroundImage: "url("+"https://i.postimg.cc/nzfZs719/Longfin-Albino-Bristlenose-Pleco.png"+")"}}>
                </div>

                <div className="skewed-header-wrapper">
                    <div className="skewed-header-content">
                      <div className="heading-wrapper">
                        <h1>Log In</h1>
                      </div>

                      <div className="links-wrapper">
                          
                        <div className="nav-link">
                            <a href="/">Home</a>
                        </div>
                
                        <div className="nav-link">
                            <a href="/about">About</a>
                        </div>
                
                        <div className="nav-link"> 
                            <a href="/stock-list">Stock</a>
                        </div>
                
                        <div className="nav-link">
                            <a href="/contact">Contact</a>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <input type="text" 
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              />
              <input type="password" 
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              />
              <button type="submit" className="btn" disabled={this.state.loading}>Login</button>
              {this.state.loading ? <img src="https://i.postimg.cc/6QyYqz2V/loading-angelfish.gif" /> :  <div className="spacer" />}
              <p>{this.state.error}</p>
              <h3>Don't have an account?</h3>
              <Link to="/sign-up"><button className="btn" >Sign Up</button></Link>
              <Footer />
            </form>
        )
    }
}