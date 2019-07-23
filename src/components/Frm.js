import React, { Component } from "react";
import Result from "./Result";
import axios from "axios";

function Frm(props) {
    return(
            <form className="form">
                <input type = "text" 
                name = "state" 
                value = {props.state} 
                onChange = {props.handleChangeInput}
                />
                <input type = "text" 
                name = "country" 
                value = {props.country} 
                onChange = {props.handleChangeInput}
                />
                <button onClick = {props.handleFormSubmit}>Submit</button>
            </form>
    )
}
export default Frm;