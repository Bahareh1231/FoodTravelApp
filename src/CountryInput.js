import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Redirect
} from 'react-router-dom';
import axios from 'axios';



let countryNameArray = [];

class CountryInput extends Component {
    constructor() {
        super();
        this.state = {
            addAListing: '',
            findACountry: '',
            countryArray: [],
            redirectAddAListing: false
        }
    }

    // get data from API and present 
    componentDidMount() {
        axios({
            method: 'GET',
            url: `https://restcountries.eu/rest/v2/`

        }).then(res => {
            
            res.data.map((item) => {
                countryNameArray.push(item.name)

            })

            this.setState({
                countryArray: countryNameArray
            })
        })
    } // end of componentDidMount

    // chooose which country to add a listing to
    handleChangeAddListing = (e) => {
        this.setState({
            addAListing: e.target.value
        })
    }

    // choose country to find from drop-down menu
    handleChangeFindCountry = (e) => {
        this.setState({
            findACountry: e.target.value
        })
    }

    // routes to finding good food in their area
    handleSubmitFindFood = (e) => {
        e.preventDefault(e);
    }

    // routes to adding a listing page
    handleSubmitAddListing = (e) => {
        e.preventDefault(e);
        this.props.inputNewPlace(this.state.addAListing);
        this.setState({
            redirectAddAListing: true
        })

        
    }



    render() {
        if (this.state.redirectAddAListing) {
            return (<Redirect push to="/inputnewplace" />)
        }
        return(
       
            <section className="countryInputSection">

                {/* FIND A PLACE BY COUNTRY */}
                <div className="findFoodOption">
                    <h2>Choose a country to view or browse from the list below</h2>
                    <select onChange={this.handleChangeFindCountry} name="countryToView" id="countryToView">
                        {/* default blank option */}
                        <option value=""></option>
                        {
                            // bring up all the countries
                            this.state.countryArray.map((item) => {
                                return (
                                    <option id={item} value={item}>{item}</option>
                                )
                            })

                        }
                        
                    </select>

                    <button onClick={this.handleSubmitFindFood}>Find</button>
                     
                </div>
                {/* END OF FIND A PLACE */}

                {/* *********************************************** */}
                
                {/* ADD A NEW PLACE */}
                <div className="addFoodPlaceOption">
                    <h2>I'd like to recommend some places I've loved</h2>
                    
                    <select onChange={this.handleChangeAddListing} name="addAListing" id="addAListing">
                        {/* default blank option */}
                        <option value=""></option>
                        {
                            // bring up all the countries
                            this.state.countryArray.map((item) => {
                                return (
                                    <option value={item}>{item}</option>
                                )
                            })
                        }
                    
                    </select>

                    
                    <button onClick={this.handleSubmitAddListing}>Add A Listing</button>
                    
                </div>
                {/* END OF ADD A NEW PLACE */}

            </section>
            
           
        )
    }
}

export default CountryInput;