import React from 'react';
import Cookies from 'js-cookie';

import SignupForm from './sign-up-form';

export default function signup(props) {
    if (Cookies.get("username")) {
        props.history.push("/")
    }
    
   
    return (
        <div className="signup-wrapper">
            <SignupForm changeRoute={props.history.push} handleSetUser={props.handleSetUser} />
            <p>Have an account?</p>
            <button className="btn" onClick={() => props.history.push("/login-form")}>Login</button>
        </div>
    )
}