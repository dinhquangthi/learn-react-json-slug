import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <h3><a href="/" className="header2">Baguetto</a></h3>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav ">
                               
                                <li>
                                    <NavLink activeClassName="selected" to="/home">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="selected"  to="/about">About</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="selected" to="/tin-chi-tiet">Tin chi tiet</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="selected" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

        );
    }
}

export default Header;