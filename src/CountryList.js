import React, { Component } from 'react';
import axios from 'axios';

let countryNameArray = [];

class CountryList extends Component {
    constructor() {
        super();
        this.state = {
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

   
    // make it so that only countries with listings appear on the page
    
    


    render() {
        return(
            <div>
                   
                <div className="CountryBlock">
                    <h3></h3>
                    <ul></ul>
                </div>
              
                

            </div>
        )
    }
}

export default CountryList