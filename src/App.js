import React, { Component } from 'react';
import './App.css';
import CountryInput from './CountryInput.js';
import CountryList from './CountryList.js';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }




  render() {
    return (
      <div className="body">
        <div className="header">
          <h1>Best places to eat per country</h1>
        </div>

        <CountryInput />
        <CountryList />

        
      </div>
    );
  }
}

export default App;
