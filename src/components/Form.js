import React, { Component } from "react";
import Result from "./Result";
import axios from "axios";

class Form extends Component{
    state = {
        state :"",
        country : "",
        humidity: "",
        temperature:"",
        lon:"",
        lat:"",
        weather:"",
        location:"",
        loc_country:""
    }
    handleChangeInput = event => {
        const { name,value} = event.target;
        this.setState({
            [name] : value
        });
    };
    searchWeather = () => {
        //const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const BASEURL = "http://api.openweathermap.org/data/2.5/weather?q=" + this.state.state + "," + this.state.country;
        //const BASEURL = "api.openweathermap.org/data/2.5/weather?q=London,uk";
        const APIKEY = "&apikey=df3a5bf2aea28dca5cdfb2e3defcbc4d";
        console.log(BASEURL +APIKEY)
        axios.get(BASEURL +APIKEY )
            .then(res => {
              console.log("response :" + JSON.stringify(res));
              this.setState({
              // result: res.data 
              lon:res.data.coord.lon,
              lat:res.data.coord.lat,
              weather:res.data.weather[0].description,
              humidity:res.data.main.humidity,
              location:res.data.name,
              loc_country:res.data.sys.country
              })
            })
            .catch(err => console.log(err));
    };
    handleFormSubmit = event =>{
        event.preventDefault();
        alert(`hello ${this.state.state} ${this.state.country}`)
        this.searchWeather();
        this.setState({
            state : "",
            country : ""
        });

    }
    render(){
        return(
            <div>
                <p>
                    Weather result : {this.state.state} {this.state.country}
                    </p>
                <form className="form">
                    <input type = "text" 
                    name = "state" 
                    value = {this.state.state} 
                    onChange = {this.handleChangeInput}
                    />
                    <input type = "text" 
                    name = "country" 
                    value = {this.state.country} 
                    onChange = {this.handleChangeInput}
                    />
                    <button onClick = {this.handleFormSubmit}>Submit</button>
                </form>
                <Result 
                    lon = {this.state.lon}
                    lat = {this.state.lat}
                    humidity = {this.state.humidity}
                    weather = {this.state.weather}
                    location = {this.state.location}
                    loc_country = {this.state.loc_country}
                />      
            </div>
        )
    }

}

export default Form;