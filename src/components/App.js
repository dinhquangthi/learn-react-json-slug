import './../css/App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import NewDetails from './NewDetails';
import DieuHuongURL from '../router/DieuHuongURL';


class App extends Component {
  render() {
    return ( 
      <Router>
      <div>
        <Header />
         <DieuHuongURL/>
        <Footer/>
      </div>
      </Router >
    );
  }
}

export default App;

