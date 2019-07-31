import React from "react";

function Result(props) {
  return (
        <div className="text-center resultBox">        
        <h3>Longitude: {props.lon}</h3>
        <h3>Latitude: {props.lat}</h3>
        <h3>weather: {props.weather}</h3>
        <h3>Humidity: {props.humidity}</h3>
        <h3>Location: {props.location}</h3>
        <h3>Country: {props.loc_country}</h3>
    </div>
  );
}

export default Result;
