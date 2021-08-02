import React from 'react';

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
                <a id="nav-bar-home-link" href="goes-home">Home</a>
                <a id="nav-bar-login-link" href="goes-to-login">Login</a>
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