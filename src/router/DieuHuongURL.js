import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import NewDetails from '../components/NewDetails';
import LienHe from '../components/LienHe';
class DieuHuongURL extends Component {
    render() {
        return (
         
                <div>
                <Route exact path="/"  component={Home} />
                <Route exact path="/home"  component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/tin-tuc/:slug.:id.html" component={NewDetails} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/lienhe" component={LienHe} />
                </div>
        
        );
    }
}

export default DieuHuongURL;