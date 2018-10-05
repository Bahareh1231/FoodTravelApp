import React, { Component } from 'react';
import axios from 'axios';


let countryNameArray = [];

class InputNewPlace extends Component {
    constructor() {
        super();
        this.state = {
            countryArray: [],
            countryName: '',
            cityName: '',
            restaurantName: '',
            description: '',
            pricePoint: '',
        }
    }

    // get API data for the input
    componentDidMount() {
        axios({
            method: 'GET',
            url: `https://restcountries.eu/rest/v2/`

        }).then(res => {

            res.data.map((item) => {
                countryNameArray.push(item.name)

            })

            this.setState({
                countryArray: countryNameArray,
                countryName: this.props.newCountryInput
            })
        });
    } // end of componentDidMount

    // change the state based on user input
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    // add price point
    addPricePoint = (e) => {
        e.preventDefault();
        console.log(e.target.className);
        
        this.setState({
            pricePoint : e.target.className
        })

    }

    // submit the listing and add it to firebase database
    handleSubmit = (e) => {
        e.preventDefault();
        // make sure all the fields are filled before submitting
        if (this.state.countryName && this.state.cityName && this.state.restaurantName && this.state.description) {
            this.props.addRestaurantToFirebase(this.state.countryName, this.state.cityName, this.state.restaurantName, this.state.description, this.state.pricePoint);
            this.setState({
                countryName: '',
                cityName: '',
                restaurantName: '',
                description: '',
                pricePoint: ''
            });
            alert('thank you!')
        } else {
            alert('no!');
            
        }
    }


    

    render() {
        return(
            <div>
                <p>Restaurant in</p>
                <select onChange={this.handleChange} name="" id="countryName">
                    {/* have the first option be what the user selected on the previous page */}
                    <option value={this.props.newCountryInput}>{this.props.newCountryInput}</option>
                    {
                        // bring up all the countries
                        this.state.countryArray.map((item) => {
                            return (
                                <option value={item}>{item}</option>
                            )
                        })

                    } 
                    {/* end of drop down list */}
                </select>
                
                {/* city input */}
                <label htmlFor="cityName">City Name</label>
                <input onChange={this.handleChange} 
                placeholder="city" 
                type="text" 
                id="cityName"
                value={this.state.cityName}/>

                {/* name of restaurant input */}
                <label htmlFor="restaurantName">Restaurant Name</label>
                <input onChange={this.handleChange} 
                placeholder="restaurant" 
                type="text" 
                id="restaurantName"
                value={this.state.restaurantName}/>



                <label htmlFor="description">Write a short description</label>
                
                <textarea id="description" 
                cols="30" 
                rows="10" 
                value={this.state.description}
                onChange={this.handleChange}>
                </textarea>
                <br/>

                <a href="" onClick={this.addPricePoint} className="$">$</a> <br/>

                <a href="" onClick={this.addPricePoint} className="$$">$$</a> <br/>

                <a href="" onClick={this.addPricePoint} className="$$$">$$$</a><br/>

                <a href="" onClick={this.addPricePoint} className="$$$$">$$$$</a><br/>

                <button onClick={this.handleSubmit}>Submit</button>

                

            </div>
        )
    }
}

export default InputNewPlace