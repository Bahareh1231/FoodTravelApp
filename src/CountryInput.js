import React, { Component } from 'react';
import axios from 'axios';

let countryNameArray = [];

class CountryInput extends Component {
    constructor() {
        super();
        this.state = {
            addAListing: '',
            findACountry: '',
            countryArray: []
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
    }



    render() {
        return(
            <div>
                <div className="findFoodOption">
                    <h2>Choose a country to view or browse from the list below</h2>
                    <select onChange={this.handleChangeFindCountry} name="countryToView" id="countryToView">
                        <option value=""></option>
                        {
                            
                            this.state.countryArray.map((item) => {
                                return (
                                    <option value={item}>{item}</option>
                                )
                            })

                        }
                        
                    </select>
                    <button onSubmit={this.handleSubmitFindFood}>Find</button>
                </div>
                
                <div className="addFoodPlaceOption">
                    <h2>I'd like to recommend some places I've loved</h2>
                    
                    <select onChange={this.handleChangeAddListing} name="addAListing" id="addAListing">
                        <option value=""></option>
                        {

                            this.state.countryArray.map((item) => {
                                return (
                                    <option value={item}>{item}</option>
                                )
                            })

                        }
                    
                    </select>

                    <button onSubmit={this.handleSubmitAddListing}>Add a Listing</button>
                </div>

            </div>
        )
    }
}

export default CountryInput;