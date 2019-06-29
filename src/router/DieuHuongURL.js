import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import NewDetails from '../components/NewDetails';
class DieuHuongURL extends Component {
    render() {
        return (
         
                <div>
                <Route exact path="/home"  component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/tin-tuc/:slug.:id.html" component={NewDetails} />
                <Route exact path="/contact" component={Contact} />
                </div>
        
        );
    }
}

export default DieuHuongURL;