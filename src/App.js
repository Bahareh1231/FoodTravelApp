import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import firebase from './firebase'; // import firebase module

//Components
import CountryInput from './CountryInput.js';
import InputNewPlace from './InputNewPlace.js';
// import CountryList from './CountryList.js';

const dbRef = firebase.database().ref();

class App extends Component {
  constructor() {
    super();
    this.state = {
      newCountryInput: ''
    }
  }

 inputNewPlace = (country) => {
    this.setState({
      newCountryInput: country
    })
    
  }

  // collects info and inputs to firebase database
  addRestaurantToFirebase = (countryName, cityName, restaurantName, description, pricePoint) => {
    dbRef.push({
      country: countryName,
      city: cityName,
      restaurant: restaurantName,
      description: description,
      pricePoint: pricePoint
    })
    
  }



  render() {
    return (

      <Router>

      
      <div className="body">
        <div className="header">
          <h1>Best places to eat per country</h1>
        </div>

        <Route exact path='/' render={(...props) => (<CountryInput {...props} inputNewPlace={this.inputNewPlace} />)}/>
        <Route exact path="/inputnewplace" render={(...props) => (<InputNewPlace {...props} newCountryInput={this.state.newCountryInput} addRestaurantToFirebase={this.addRestaurantToFirebase}/>)} />
        
        
      </div>
      {/* end of body */}
      </Router>
    );
  }
}

export default App;
