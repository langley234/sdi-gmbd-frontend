import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
class NavBar extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
                <div>
                    <h2>GMDB</h2>
                    <a id="nav-bar-home-link">Home</a>
                    <a id="nav-bar-login-link">
                        <Link to="/login">Login</Link></a>
                    <div>
                        <form data-testid="nav-bar-form">
                            <label for="search"></label>
                            <input type="text" id="nav-bar-search-input"></input>
                            <input type="submit" value="Search"></input>
                        </form>
                    </div>
                </div>
        );
    }
}

export default NavBar;