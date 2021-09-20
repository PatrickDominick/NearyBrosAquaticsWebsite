import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Footer from './footer';
import { Link } from "react-router-dom";

export default class SignupForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            passwordConfirm: "",
            name: "",
            address: "",
            error: "",
            loading: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
    
        if (this.state.username === "" || this.state.password === "" || this.state.passwordConfirm === "") {
          this.setState({ error: "Please fill out all fields" });
        }
        else if (this.state.password !== this.state.passwordConfirm) {
            this.setState({ error: "Passwords do not match" })
        }
        else {
          this.setState({
            loading: true,
            error: "",
          });
    
          fetch("https://nearybrosaquatics-api.herokuapp.com/user/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
              name: this.state.name,
              address: this.state.address
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
    
              this.setState({ loading: false });
                this.props.handleSetUser(data);
                Cookies.set("username", this.state.username);
                this.props.changeRoute("/"); 
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
            <form className="form-group" onSubmit={this.handleSubmit}>
              <div className="skewed-header">
                <div className="header-bg" style={{backgroundImage: "url("+"https://i.postimg.cc/nzfZs719/Longfin-Albino-Bristlenose-Pleco.png"+")"}}>
                </div>

                <div className="skewed-header-wrapper">
                    <div className="skewed-header-content">
                      <div className="heading-wrapper">
                        <h1>Sign Up</h1>
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
                <div className="signup-form-wrapper">
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
                  <input type="password" 
                  placeholder="Confirm Password"
                  name="passwordConfirm"
                  value={this.state.passwordConfirm}
                  onChange={this.handleChange}
                  />
                  <input type="text" 
                  placeholder="Full Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  />
                  <input type="text" 
                  placeholder="Full Address"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  />
                <button type="submit" className="btn" disabled={this.state.loading}>Sign Up</button>
                {this.state.loading ? <img src="https://i.postimg.cc/6QyYqz2V/loading-angelfish.gif" /> :  <div className="spacer" />}
                <p>{this.state.error}</p>
                <p>Have an account?</p>
                <Link to="/login-form"><button className="btn" >Log In/Sign Up</button></Link>
                <div className="spacer100"/>
                <Footer />
              </div>
            </form>
        )
    }
}