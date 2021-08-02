import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Login extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <h2>Login</h2>
                    <form>
                        <label>Email:</label>
                        <input type="text" id="login-email-input"></input>
                        <label>Password:</label>
                        <input type="text" id="login-password-input"></input>
                    </form>
                    <button>Login</button>
                </div>
            </Router>
        );
    }
}

export default Login;