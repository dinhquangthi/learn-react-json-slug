import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
                                <li className="nav-item">
                                    <a className="nav-link header2" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link header2" href="/about">About us</a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link header2" href="/contact">Contact</a>
                                </li>
                               
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
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