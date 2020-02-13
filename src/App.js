import React, { Component } from 'react';
import './App.css';
import './components/series/BoxSeries'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';

import BoxSeries from './components/series/BoxSeries';




class App extends Component{
 
  //método que mostra o Html para o usuário
  render(){
    return (
      <div>
        <Navbar/>
        <BoxSeries/>
    </div>
    )
  }
}

export default App;
