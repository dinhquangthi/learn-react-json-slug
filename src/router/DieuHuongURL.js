import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
class DieuHuongURL extends Component {
    render() {
        return (
         
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
        
        );
    }
}

export default DieuHuongURL;