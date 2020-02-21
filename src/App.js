import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Routes from '../src/routes/Routes'



class App extends Component {
  render() {
    return (
      <Routes/>
      
    )
  }

}

export default App;
