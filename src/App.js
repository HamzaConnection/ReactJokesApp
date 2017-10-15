import React, { Component } from 'react';
import { Router , Route } from 'react-router-dom'; 
import logo from './logo.svg';
import './App.css';
import {jokes} from './components/jokes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"> Welcome to the Joke App</p>
        <div>
        <p>Links:</p>
        
       
        
      </div>
      </div>
    );
  }
}




export default App;